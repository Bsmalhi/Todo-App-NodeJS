// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructing

var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Unable to connect to Mongodb Server!');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5969b5e73aa3d4439b71ca92')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to find todos', err);
    // });

     db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count: ', count);
    },(err)=>{
        console.log('Unable to find todos', err);
    });

    //db.close();
});
