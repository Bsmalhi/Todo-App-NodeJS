const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
var {authenticate} = require('./middleware/authenticate')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

    var todo1 = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo1.save().then((doc)=>{
        res.send(doc);
    }).catch((e)=>{
        res.status(400).send(e);
    });

});

app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({ todos });
    },(e)=>{
        res.status(400).send(e);
    });
});

// GET /todo/id with an ID find method
app.get('/todos/:id', (req, res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
    return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
    if(!todo){
        return res.status(404).send();
    }
    res.send({todo});
    }).catch((e)=> res.status(400).send());

});

// DELETE document
app.delete('/todos/:id',(req, res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
    return res.status(404).send();
    } 

    Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
        return res.status(404).send();
    }
    res.status(200).send({todo});
    }).catch((e)=> res.status(404).send());
});

// app update todo
app.patch('/todos/:id', (req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid(id)){
    return res.status(404).send();
    } 

    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt = new Date().getTime();
    }else{  
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo){
        return res.status(404).send();
    }
    res.send({todo});
    }).catch((e)=> res.status(400).send());
});

app.post('/users', (req, res)=>{

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth', token).send(user);
    }).catch((e) => res.status(400).send(e));

});


//uses Middleware file authenticate
app.get('/users/me', authenticate, (req, res)=>{
    res.send(req.user);
});

app.listen(port, ()=>{
    console.log('started on port ', port);
});

module.exports = {app};