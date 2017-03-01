const axios = require('axios');

// Generate base url
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=94b64a6167479ba6904363088af58651';

module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // axios takes a url and return a result using promises
    return axios.get(requestUrl).then((res) => {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  }
};
