const express =require('express')

const urlRoute=require('./routes/urlroute')

const app=express()


const port=5000



app.use(urlRoute)


app.listen(port,console.log(`server running on port ${port}`))