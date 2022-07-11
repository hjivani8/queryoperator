const mongoose = require('mongoose');

const dataoperatorSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    age:{
        type:Number
    },
    country:{
        type:String
    }

});

const user = mongoose.model('user',dataoperatorSchema);

module.exports = user;