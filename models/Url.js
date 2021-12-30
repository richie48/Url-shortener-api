const mongoose =require('mongoose')


const urlSchema= new mongoose.Schema({
    longurl:{type:String, required:true},
    shortUrl:{type:String},
    shortId:{type:String}
})

module.exports = mongoose.model('Url', urlSchema);

