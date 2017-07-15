var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }
});

module.exports = {User};