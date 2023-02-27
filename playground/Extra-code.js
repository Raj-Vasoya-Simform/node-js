// const url =
//   "http://api.weatherstack.com/current?access_key=6daf8c627dd5864523fb0b0ce179db0c&query=23.0225,72.5714";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect ot weather service.");
//   } else if (response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degree out.`
//     );
//   }
// });

// const geocodURL =
//   "http://api.positionstack.com/v1/forward?access_key=8c46407d8c1a002c6556406599976e76&query=1600 Pennsylvania Ave NW,Washington DC";

// request({ url: geocodURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location service.");
//   } else if (response.body.error) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.data[0].latitude;
//     const longitude = response.body.data[0].longitude;
//     console.log(`Latitude is : ${latitude} and Longitude is : ${longitude}`);
//   }
// });

// geocode("Ahmedabad", (error, data) => {
//     if (error) {
//       return console.log(error);
//     }

//     // console.log("Error : ", error);
//     // console.log("Data : ", data);
//     weather(data.latitude, data.longitude, (error, weatherData) => {
//       if (error) {
//         return console.log(error);
//       }

//       console.log(data.location);
//       console.log(weatherData);
//       // console.log("Error : ", error);
//       // console.log("Data : ", data);
//     });
//   });
