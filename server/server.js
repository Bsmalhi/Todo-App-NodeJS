var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

    var todo1 = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo1.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
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

    

app.listen(3000, ()=>{
    console.log('started on port 3000');
});