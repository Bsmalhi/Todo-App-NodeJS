// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructing

var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Unable to connect to Mongodb Server!');
    }
    console.log('connected to MongoDB server');
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
    //     console.log(result);
    // });
    // //DeleteOne
    // db.collection('Todos').deleteOne({text: 'Eat breakfast'}).then((result)=>{
    //     console.log(result);
    // });
        //findOneAndDelete first finds and display and then delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //      console.log(result);
    // });

    db.close();
});
