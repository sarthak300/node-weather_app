const request = require('request')

const forecast = (latitiude,longtitude,callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=924f668f92cea584cf06e1fae61271fb&query='+encodeURIComponent(latitiude)+','+encodeURIComponent(longtitude) +'&units=m';
    request({ url, json:true}, (error,{ body }= {} )=>{
        if(error){
            callback('Unable to connect to server',undefined)
        }else if  (body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,(
                body.current.weather_icons[0] +'##@@##'+
                body.current.weather_descriptions[0] +' throughout the day. It is currently '+
                body.current.temperature + ' degree out there. It feels like '+
                body.current.feelslike+' degree. ' + 'Wind is blowing at a speed of '+
                body.current.wind_speed+' km/hr. Humidity is '+body.current.humidity+'% .'   
            ))
        }
    }) 
}
module.exports = forecast