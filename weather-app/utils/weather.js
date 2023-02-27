const request = require("request");

const weather = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6daf8c627dd5864523fb0b0ce179db0c&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect ot weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degree out.`)
    }
  });
};

module.exports = weather;
