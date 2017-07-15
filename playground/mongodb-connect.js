// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructing

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Unable to connect to Mongodb Server!');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     test:'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err)
    //     return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    // db.collection('Users').insertOne({
    //     name:'Adam',
    //     location: 'San Francisco',
    //     age: 22
    // }, (err, result)=>{
    //     if(err)
    //     return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });


    db.close();
});
