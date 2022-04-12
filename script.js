// $("#current-location-btn").on("click",);

var weatherResponse
var locationHereLat
var locationHereLon


// function getData() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });

// }


getLocation();



function getLocation() {
    fetch("http://ip-api.com/json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            locationHereLat = data.lat;
            locationHereLon = data.lon;
            console.log(`${locationHereLat}, ${locationHereLon}`);
            getData();
        })
}

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationHereLat}&lon=${locationHereLon}&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseHere = data;
            console.log(weatherResponseHere);
        })


}