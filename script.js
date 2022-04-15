
$(document).ready(function () {
    $('.parallax').parallax();
    console.log("hit")
});

// event listeners
$("#current-location-btn").on("click", musicGetHere);

$("#other-location-btn").on("click", checkButton);

$("#last-location-btn").on("click", musicGetPast);

// indentifies which radio button is checked
function checkButton() {
    topOrBottom = true;
    if ($('#paris-btn').prop('checked')) {
        getDataParis();
    } else if ($('#HK-btn').prop('checked')) {
        getDataHK();
    } else if ($('#cape-btn').prop('checked')) {
        getDataCapeTown();
    } else if ($('#belmopan-btn').prop('checked')) {
        getDataBelmopan();
    } else if ($('#cold-btn').prop('checked')) {
        getDataVinson();
    } else if ($('#falls-btn').prop('checked')) {
        getDataNiagra();
    } else if ($('#rock-btn').prop('checked')) {
        getDataAyers();
    } else {
        return;
    }
}

// this function used to do more
function musicGetHere() {
    topOrBottom = false;
    getLocation();
}


// variables for storing fetched data
var weatherResponseHere;
var locationHereLat;
var locationHereLon;
var weatherResponseParis;
var weatherResponseHK;
var weatherResponseCapeTown;
var weatherResponseBelmopan;
var weatherResponseVinson;
var weatherResponseNiagra;
var weatherResponseAyers;
var topOrBottom = true;

// puts data from the spotify functions into one of two containers
function displayList() {

    if (!topOrBottom) {

        //top section

        $(".playlists-A").css("display", "flex");

        for (var i = 0; i < playlists.length; i++) {

            $("#image-" + i).attr("src", playlists[i].images[0].url);

            $("#title-" + i).text(playlists[i].name);

            $("#link-" + i).attr("href", playlists[i].external_urls.spotify);

            $("#link-" + i).text("click to listen")

        }

    } else {

        //bottom section

        $(".playlists-B").css("display", "flex");

        for (var i = 0; i < playlists.length; i++) {

            $("#image2-" + i).attr("src", playlists[i].images[0].url);

            $("#title2-" + i).text(playlists[i].name);

            $("#link2-" + i).attr("href", playlists[i].external_urls.spotify);

            $("#link2-" + i).text("click to listen")

        }
    }
}


//local storage of the last "current" location
var lastLocation = JSON.parse(localStorage.getItem("lastLocation"));

//makes sure there is data in local storage to get
function musicGetPast() {
    if (lastLocation) {
        topOrBottom = false;
        console.log("getting data from the past");
        musicGet(lastLocation);
    }
}


//extracts lat and long from ip
function getLocation() {
    fetch(`https://ipwhois.app/json/none`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            locationHereLat = data.latitude;
            locationHereLon = data.longitude;
            getData();
        })
}


//gets weather data for current location
function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationHereLat}&lon=${locationHereLon}&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseHere = data;
            localStorage.setItem("lastLocation", JSON.stringify(weatherResponseHere))
        })
        .then(function () {
            musicGet(weatherResponseHere);
        })


}


//weather data for paris, only gets called if paris button is checked
function getDataParis() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseParis = data;
        })
        .then(function () {
            musicGet(weatherResponseParis);
        })


}


//weather data for paris, only gets called if HK button is checked
function getDataHK() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=22.3193&lon=114.1694&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseHK = data;
        })
        .then(function () {
            musicGet(weatherResponseHK);
        })


}

//weather data for paris, only gets called if cape town button is checked
function getDataCapeTown() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.9249&lon=18.4241&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseCapeTown = data;
        })
        .then(function () {
            musicGet(weatherResponseCapeTown);
        })


}

//weather data for paris, only gets called if belmopan button is checked
function getDataBelmopan() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=17.2510&lon=-88.7700&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseBelmopan = data;
        })
        .then(function () {
            musicGet(weatherResponseBelmopan);
        })


}


//weather data for paris, only gets called if antarctica button is checked
function getDataVinson() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-78.5333&lon=-85.5833&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseVinson = data;
        })
        .then(function () {
            musicGet(weatherResponseVinson);
        })
}

//weather data for paris, only gets called if niagra falls button is checked
function getDataNiagra() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.0962&lon=-79.0471&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseNiagra = data;
        })
        .then(function () {
            musicGet(weatherResponseNiagra);
        })
}


////weather data for paris, only gets called if uluru button is checked
function getDataAyers() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-25.3448&lon=131.0325&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherResponseAyers = data;
        })
        .then(function () {
            musicGet(weatherResponseAyers);
        })
}


//sorts weather data into which spotify function is called based on sky condition
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

    if (skyCondition >= 200 && skyCondition <= 531) {
        playlists = '';
        getPlaylistStormy();

    } else if (skyCondition >= 300 && skyCondition <= 321) {
        playlists = '';
        getPlaylistStormy();
    } else if (skyCondition >= 500 && skyCondition <= 531) {
        playlists = '';
        getPlaylistStormy();
    } else if (skyCondition >= 600 && skyCondition <= 622) {
        playlists = '';
        getPlaylistSnow();
    } else if (skyCondition == 741) {
        playlists = '';
        getPlaylistFog();
    } else if (skyCondition == 781) {
        playlists = '';
        getPlaylistTornado();
    } else if (skyCondition == 751) {
        playlists = '';
        getPlaylistSandStorm();
    } else if (temp <= 283) {
        playlists = '';
        getPlaylistCold();
    } else if (temp >= 300) {
        playlists = '';
        getPlaylistHot();
    } else {
        playlists = '';
        getPlaylistSunny();
    }

}

// Spotify API ------------------------------------------------------------------------------
var clientId = '234754f0bf294bf5b88cd420b4bb8a24';
var clientSecret = '24b6ec5fed5144008b8dfe088c8529c9';
var token;
var playlists = [];
var playlistURL = [];

getToken();

//authorized spotify
function getToken() {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            token = data.access_token;
        })
}

//search playlists for clear skies
function getPlaylistSunny() {
    fetch(`https://api.spotify.com/v1/search?q=sunny&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for stormy skies
function getPlaylistStormy() {
    fetch(`https://api.spotify.com/v1/search?q=stormy%20days&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for snow
function getPlaylistSnow() {
    fetch(`https://api.spotify.com/v1/search?q=snowy&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for fog
function getPlaylistFog() {
    fetch(`https://api.spotify.com/v1/search?q=foggy&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for tornado
function getPlaylistTornado() {
    fetch(`https://api.spotify.com/v1/search?q=tornado&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for sandstorm
function getPlaylistSandStorm() {
    fetch(`https://api.spotify.com/v1/search?q=desert&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for cold days
function getPlaylistCold() {
    fetch(`https://api.spotify.com/v1/search?q=cold%20days&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}

//search playlists for hot days
function getPlaylistHot() {
    fetch(`https://api.spotify.com/v1/search?q=summer&type=playlist&limit=5&offset=5`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playlists = data.playlists.items;
            console.log(playlists);
            displayList();
        })
}
