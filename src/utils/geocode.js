const request = require('request');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=1&language=es&access_token=pk.eyJ1IjoiaW5nZW5pZXJvcnVsbyIsImEiOiJjazM4bjR3MHUwYmF0M25vYjVvbzlobzduIn0.QcAAQIyzw6czZpMRBtPiaw'
    
    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined)
        }
        else if (!Array.isArray(body.features) || body.features.length === 0) {
            callback('Unable to find location!', undefined)
        }
        else {
            // const features = body.features[0]
            // const fea = {place_name: location, longitude, latitude} = [features.place_name, ...features.center];
            // callback(undefined,{location: features.place_name, ...features.center})
            callback(undefined,{
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0], 
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode