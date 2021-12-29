const express =require('express')
const dotenv=require('dotenv')

const urlRoute=require('./routes/urlRoute')

const app=express()

dotenv.config({ path: './config/config.env' });

const port=5000



app.use('/api/urlroute',urlRoute)


app.listen(port,console.log(`server running on port ${port}`))