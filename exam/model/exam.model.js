var mongoose = require('mongoose');



var userSchema = mongoose.Schema({

make : String,

model : String,

year : Number,

type : String,

features : String,

purchasedate : Date

});

 

module.exports = mongoose.model('exam', userSchema);
