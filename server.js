const express = require('express')
const app = express()

app.set('view engine', "ejs")

app.use(express.static('public'))

const userLearnMoreRouter = require('./routes/learnMore')
app.use("/learnMore", userLearnMoreRouter)

app.listen(8000)