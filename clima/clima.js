const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=07188fbf40c119bf5735991b5a2cb1f6&units=metric`)




    return resp.data.main.temp;

}

module.exports = {
    getClima
}