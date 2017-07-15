// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructing

var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Unable to connect to Mongodb Server!');
    }
    console.log('connected to MongoDB server');
   
        // findOneAndUpdate first finds and display and then delete
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5969b741ab595e43b1d0a490")    
    }, {
        $set:{
        completed: false,
        text: 'cool updated the text with $set'
        }
    },{
        returnOriginal: false
    }).then((result)=>{
         console.log(result);
    });

    db.close();
});
