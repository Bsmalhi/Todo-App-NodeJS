const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove().then((result)=>{});

Todo.findByIdAndRemove('596a969aaeb1ef15d1302949').then((result)=>{
    console.log(result);
});