const express=require('express')
const router=express.Router()

const {createShortUrl,getShortUrl}=require('../controllers/shortenUrl')

router.route('/').post(createShortUrl)

router.route('/:longurl').get(getShortUrl)


module.exports=router

