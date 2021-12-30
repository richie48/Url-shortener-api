const express=require('express')
const router=express.Router()

const {createShortUrl,getShortUrl}=require('../controllers/shortenUrl')

router.route('/').post(createShortUrl)

router.route('/:shorturl').get(getShortUrl)


module.exports=router

