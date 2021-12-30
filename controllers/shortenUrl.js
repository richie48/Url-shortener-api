const Url =require('../models/Url')
const shortId=require('shortid')

exports.createShortUrl = (req,res,err) =>{
    const{longUrl}=req.body

    const baseUrl='http://localhost:5000'

    newUrl=shortId.generate()

    if (toString(longUrl).startsWith('http')){

        
    }

    const splitUrl=JSON.stringify(longUrl).split('//')
    const baseUrl=splitUrl[0]
    console.log(splitUrl)
    
    try{

        const url =new Url({
            // url.longUrl=longUrl,
        })
        console
        res.json(longUrl)

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