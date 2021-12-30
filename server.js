const express =require('express')
const dotenv=require('dotenv')

const connectDb=require('./config/db')
const urlRoute=require('./routes/urlRoute')
dotenv.config({ path: './config/config.env' });

const app=express()
connectDb()

const port=5000



app.use('/api/shortener',urlRoute)


app.listen(port,console.log(`server running on port ${port}`))