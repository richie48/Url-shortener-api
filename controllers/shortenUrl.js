const Url =require('../models/Url')
const shortId=require('shortid')
const validUrl=require('valid-url')

exports.createShortUrl = async (req,res,err) =>{
    
    try {
        const{longUrl}=req.body

        const baseUrl='http://localhost:5000'

        newCode=shortId.generate()

        //if the longurl is valid then we search through the database to see if we have already a  
        //shorturl for it, if we don't then we can create the short url.
        if (validUrl.isUri(longUrl)) {
        
          let url = await Url.findOne({ longUrl });
    
          if (url) {
            res.send('A shorturl already exist in database for this url');
          } else {
            const shortUrl = baseUrl + '/' + newCode;
    
            url = new Url({
              longUrl,
              shortUrl,
              newCode,
              createdAt:new Date()
            });
            
            //save the new object to database
            await url.save();
    
            res.json(url);
          }}
    }catch (err) {
        console.error(err);
        res.status(500).json('Invalid');
    }
}


//endpoint working
exports.getShortUrl = (req,res,err) =>{

    try{
        //so will be hitting the short url endpoint but it will be redirected to the long url
        const shortUrl=req.params.shortUrl

        //only finding one model in the data that matches the 
        const link= Url.findOne({newCode:shortUrl})
        if(link){
          return res.redirect(link.longUrl)
        }
        else{
          return res.status(404)
        }

        
    }catch(err){
        res.status(500)
        console.log(err.message)
    }
}


//schedule the deletion of shorturls after 6 months of getting created.
const agenda=require('agenda')
exports.deleteShortUrl=(req,res,err)=>{
  console.log(Date.now())

}