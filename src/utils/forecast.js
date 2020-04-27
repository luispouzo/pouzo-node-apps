const request = require('request');

const forecast = (latitud, longitud, callback) => {
    const url = 'https://api.darksky.net/forecast/a26edcdceafc17005d388fc695aee305/'+ latitud +','+ longitud + '?units=si&lang=es'
    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('"Unable to connect to weather srvice!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            const currentlyData =  body.currently
            callback(undefined, body.daily.data[0].summary + "\nIt is currently " + currentlyData.temperature + " degrees out. The hight today is " 
                + body.daily.data[0].temperatureHight + "with a low of " + body.daily.data[0].temperatureLow + ". There is a " 
                + currentlyData.precipProbability + "% chance of rain")
        }
    })
}

module.exports = forecast