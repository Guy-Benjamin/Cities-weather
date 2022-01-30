const express = require('express')
const weatherRouter = require('./routes/weather')
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req,res) => { 
    res.redirect('/weather')
 })


app.use('/weather',weatherRouter)
app.listen(5000);  


