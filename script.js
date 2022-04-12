$("#current-location-btn").on("click", musicGetHere);

$("#other-location-btn").on("click", checkButton);

function checkButton() {
    if ($('#paris-btn').prop('checked')) {
        musicGet(weatherResponseParis);
    } else if ($('#HK-btn').prop('checked')) {
        musicGet(weatherResponseHK);
    } else if ($('#cape-btn').prop('checked')) {
        musicGet(weatherResponseCapeTown);
    } else if ($('#belmopan-btn').prop('checked')) {
        musicGet(weatherResponseBelmopan);
    } else {
        return;
    }
}

function musicGetHere() {
    musicGet(weatherResponseHere);
}

var weatherResponseHere
var locationHereLat
var locationHereLon
var weatherResponseParis
var weatherResponseHK
var weatherResponseCapeTown
var weatherResponseBelmopan

getLocation();
getDataParis();
getDataHK();
getDataCapeTown();
getDataBelmopan();

function getLocation() {
    fetch("http://ip-api.com/json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            locationHereLat = data.lat;
            locationHereLon = data.lon;
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
        })


}

function getDataParis() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseParis = data;
        })


}

function getDataHK() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=22.3193&lon=114.1694&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseHK = data;
        })


}

function getDataCapeTown() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.9249&lon=18.4241&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseCapeTown = data;
        })


}

function getDataBelmopan() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=17.2510&lon=88.7590&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseBelmopan = data;
        })


}

function musicGet(weatherResponse) {
    console.log(weatherResponse)
    //code for sorting through the weather response and deciding which playlist to get

    //get playlist from spotify

    //assign playlist to html elements


}