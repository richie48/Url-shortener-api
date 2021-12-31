const mongoose =require('mongoose')


const urlSchema= new mongoose.Schema({
    longUrl:{type:String, required:true},
    shortUrl:{type:String},
    newCode:{type:String},
    createdAt:{
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Url', urlSchema);

