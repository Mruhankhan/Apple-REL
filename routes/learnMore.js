const express = require('express')
const learnMoreRouter = express.Router()

learnMoreRouter.get("/", (req,res) =>{
    res.send('yoo')
})

 // new route
 //learnMoreRouter.get('/new', (req, res) =>{
   // res.send('New Form')
//})
module.exports = learnMoreRouter