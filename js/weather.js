const API_KEY = "5b7722be94dc3174c96bf403eaa91bd6";


function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
//성공했을때 실행, 실패했을때 실행

const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.7399307&lon=-73.9243285&appid=5b7722be94dc3174c96bf403eaa91bd6&units=metric`;