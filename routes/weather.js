const express = require('express')
const router = express.Router()
const apiHTTPCall = require('../http_call')



// On get '/weather' route - call async callback and render its respose using 'weather.ejs'
router.get('/', (req,res) => { 
    try{
        apiHTTPCall.callApi( function(response){
            //console.log('response msg after the callback func return='+ JSON.stringify(response))
            res.render('weather', {city_output: response})  
        })
    } catch (error) {
        console.error("Weather GET routing error: " + error.message)
        return
    }
 })
 

// Post function for future use - adding new city to the show list
router.post('/',  async(req, res) => {
    try{
        apiHTTPCall.cities.push('Kyiv')
        console.log('adding Kyiv')
        res.end()
    } catch(e) {
        console.log(e)
    } 
})

module.exports = router

