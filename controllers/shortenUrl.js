const Url =require('../models/Url')

exports.createShortUrl = (req,res,err) =>{
    try{
        res.send('url shortened')
    }catch(err){
        console.error(err);
    }

}

exports.getShortUrl = (req,res,err) =>{

    try{
        res.send('url sent')
    }catch(err){
        console.error(err);
    }
}