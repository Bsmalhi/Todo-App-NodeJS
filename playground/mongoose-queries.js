const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '596a5098ae0ae04945e4abef';

if(!ObjectID.isValid(id)){
    console.log('ID not valid!');
}

Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todos', todo);
});

// Todo.findById(id).then();