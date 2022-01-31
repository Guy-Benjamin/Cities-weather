const express = require('express')
const app = express()
const http = require('http')
const https = require('https')

const target_cities = []
target_cities.push('London' ,'Tel Aviv','New York')

 
const callExternalApi = (callback) => {
    const cities_data = [];
    const bodyParser = require('body-parser')

    cities_data.splice()
    app.use(bodyParser.json())

    target_cities.forEach (city_name => {
        
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
                    ${city_name}?unitGroup=metric&include=current&key=1PYNQ6AWUDJE9AFERDCHJHSXK&contentType=json`
        
        var body = ""

        https.get(url, (res) => {
            res.on("data", (chunk) => {
                body += chunk;
            })
            res.on ("end", () => {
                try {
                    let json = JSON.parse(body)      
                    if (json.hasOwnProperty('currentConditions')){
                        city_data = {city: city_name, temperature: json.currentConditions.temp ,
                                    humidity: json.currentConditions.humidity, Datetime: json.currentConditions.datetime, 
                                    description: json.currentConditions.conditions}
                        if (cities_data.length < target_cities.length) cities_data.push(city_data)
                        if (cities_data.length == target_cities.length) return callback(cities_data)   
                    } 
                } catch (error) {
                    console.error("error on http end:" + error.message)
                    return 
                }
            })
        }).on("error", (error) => {
            console.error("error during http get:" + error.message)
            return 
        })
    })
}


module.exports.callApi = callExternalApi
module.exports.cities = target_cities
