const mongoose =require('mongoose')


const urlSchema= new mongoose.Schema({
    longurl:{type:String, required:true},
    shortUrl:{type:String},
    shortId:{type:String},
    createdAt:{
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Url', urlSchema);

