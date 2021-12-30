const express =require('express')
const dotenv=require('dotenv')

const connectDb=require('./config/db')
const urlRoute=require('./routes/urlRoute')
dotenv.config({ path: './config/config.env' });

const app=express()
app.use(express.json());
connectDb()

const port=5000

app.use('/api/shortener',urlRoute)

app.listen(port,console.log(`server running on port ${port}`))

//For unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error:${err.message}`);
    server.close(() => process.exit(1));
  });