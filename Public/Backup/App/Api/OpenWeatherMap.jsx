//api.openweathermap.org/data/2.5/weather?q=London
var axios = require('axios');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=54bd0f928e4b32c69736d3eea05bfdcf&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(            
            function (res) {                
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (res) { throw new Error(res.data.message); }

        );
    }
}

