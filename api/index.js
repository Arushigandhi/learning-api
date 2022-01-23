require("dotenv").config({
    path: __dirname + "/.env"
});
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

var whitelist = ['http://localhost:3000']

var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE',
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use((req, res, next) => {
    bodyParser.json({
        limit: '50mb',
        extended: true
    })(req, res, (err) => {
        if (err) {
            console.error(err)
            return res.sendStatus(400) // Bad request
        }
        next()
    })
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    extended: true
}));

const db = process.env.MONGO_DB_URI

app.post('/i-need-a-header',(req,res,next)=>{
const token =req.headers.token;
console.log(token);
if( token !== 'ARUSHI_L_ARYAMANN')return res.status(500)
.json({
    success:false,
})
next();

},(req,res)=>{
return res.status(200)
.json({success:true,})
})

app.post(
    '/post-request',(req,res,next)=>{
    const body=req.body;
    
    console.log(body);
    return res.status(200)
    .json({
        success:true,
        post:true
    })
})

app.post('/welcome',(req,res,next)=>{
    return res.json({
        success:true,
        post:true
    })
})

app.get('/welcome', (req, res,next) => {
    const token  = req.headers.token;
//     if (!token)
//     return res.status(500)
//  .json({
//      success:false,
//  })
 next()

},(req,res)=>{
    return res.status(200)
    .json({
        success:true,
        userId:'sdoisdjfosidjfisd'
    })
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})