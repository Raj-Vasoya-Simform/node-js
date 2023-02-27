const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=6daf8c627dd5864523fb0b0ce179db0c&query=23.0377,72.56228&unit=f`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
