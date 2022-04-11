$("#current-location-btn").on("click", getData());


function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=5ff5cac73a1063fefa1a4b5e6eb8806c`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

}