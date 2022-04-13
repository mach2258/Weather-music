
$(document).ready(function(){
    $('.parallax').parallax();
    console.log("hit")
});

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
    var skyCondition = weatherResponse.weather[0].id;

    // skyCondition is an integer

    // 200-232 thunderstorm

    // 300-321 light rain

    // 500-531 rain

    // 600-622 snow

    // 741 fog

    // 781 tornado

    // 751 sand

    var temp = weatherResponse.main.temp;

    // temp is a number, recorded in kelvin

    // under 273, freezing point of water

    // 283- cold day

    // 293- room temperature

    // 303- hot day

    var windSpeed = weatherResponse.wind.speed

    // windSpeed is a number

    // 12 or over is windy

    var desiredPlaylist

    if (skyCondition >= 200 && skyCondition <= 531) {
        // desiredPlaylist = playlist for thunder
        playlists = '';
        getPlaylistStormy();

    } else if (skyCondition >= 300 && skyCondition <= 321) {
        // desiredPlaylist = playlist for light rain
        playlists = '';
        getPlaylistStormy();
    } else if (skyCondition >= 500 && skyCondition <= 531) {
        // desiredPlaylist = playlist for heavy rain
        playlists = '';
        getPlaylistStormy();
    } else if (skyCondition >= 600 && skyCondition <= 622) {
        // desiredPlaylist = playlist for snow
        playlists = '';
        getPlaylistSnow();
    } else if (skyCondition == 741) {
        // desiredPlaylist = playlist for fog
        playlists = '';
        getPlaylistFog();
    } else if (skyCondition == 781) {
        // desiredPlaylist = playlist for tornado
        playlists = '';
        getPlaylistTornado();
    } else if (skyCondition == 751) {
        // desiredPlaylist = playlist for sandstorm
        playlists = '';
        getPlaylistSandStorm();
    } else if (temp <= 283) {
        // desiredPlaylist = playlist for cold day
        playlists = '';
        getPlaylistCold();
    } else if (temp >= 300) {
        // desiredPlaylist = playlist for hot day
        playlists = '';
        getPlaylistHot();
    } else {
        // desiredPlaylist = playlist for nice day
        playlists = '';
        getPlaylistSunny();
    }

    //get playlist from spotify

    //assign playlist to html elements


}

// Spotify API ------------------------------------------------------------------------------
var clientId = '234754f0bf294bf5b88cd420b4bb8a24';
var clientSecret = '24b6ec5fed5144008b8dfe088c8529c9';
var token;
var playlists = [];
var playlistURL = [];

getToken();
// getPlaylistStormy();
getPlaylistSunny();

function getToken() {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            token = data.access_token;
            console.log(data);
        })
}

function getPlaylistSunny() {
    fetch(`https://api.spotify.com/v1/search?q=sunny&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistStormy() {
    fetch(`https://api.spotify.com/v1/search?q=stormy%20days&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistSnow() {
    fetch(`https://api.spotify.com/v1/search?q=snowy&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistFog() {
    fetch(`https://api.spotify.com/v1/search?q=foggy&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistTornado() {
    fetch(`https://api.spotify.com/v1/search?q=tornado&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistSandStorm() {
    fetch(`https://api.spotify.com/v1/search?q=desert&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistCold() {
    fetch(`https://api.spotify.com/v1/search?q=cold%20days&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}

function getPlaylistHot() {
    fetch(`https://api.spotify.com/v1/search?q=summer&type=playlist&limit=5&offset=5`, { 
        method: 'GET',
        headers:{ 'Accept' : 'application/json', 
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + token}
})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
        })
}
