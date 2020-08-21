let getWeatherReport = () => {
    //step 1
    let xhr = new XMLHttpRequest();
    //step 2

    let cityName = document.querySelector('#city').children[0].value || "Mumbai";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=f3320fd01e5acd43fbccc8d405b4c3e9&units=metric&q="
        + cityName;

    xhr.open("GET", url);
    //step 3
    xhr.onload = () => {
        const weatherJSON = JSON.parse(xhr.responseText);
        DomOperation(weatherJSON);
    }
    //step 4
    xhr.send();
}

let DomOperation = (weatherJSON) => {
    //console.log(weatherJSON);
    // get all the values from JSON file
    var city = weatherJSON.name;
    //console.log(city);
    var temp = weatherJSON.main.temp;
    //console.log(temp);
    var temp_min = weatherJSON.main.temp_min;
    //console.log(temp_min);
    var temp_max = weatherJSON.main.temp_max;
    //console.log(temp_max);
    var weather = weatherJSON.weather[0].description;
    //console.log(weather);
    var Humidity = weatherJSON.main.humidity;
    //console.log(weatherJSON.main.pressure);
    var lon = weatherJSON.coord.lon;
    //console.log(lon);
    var lan = weatherJSON.coord.lat;
    //console.log(lan);

    //document.querySelector("#city").children[0].children[0].children[0].value
    // search city get from this  
    document.querySelector('#inputCity').value = city;
    //  
    document.querySelector("#temp").value = temp;
    //
    document.querySelector("#mintemp").value = temp_min;
    //
    document.querySelector("#maxtemp").value = temp_max;
    //
    document.querySelector("#weather").value = weather;
    //
    document.querySelector("#Humidity").value = Humidity;
    //
    document.querySelector("#lang").value = lan;
    //
    document.querySelector("#long").value = lon;

    document.querySelector("#city").children[0].value = "";

    //let parent = document.querySelector("#parent");
    //let newElement = parent.children[0].cloneNode(true);
    //newElement.style.display = "flex";
    //newElement.innerHTML = city + " " + "Temprature = " + temp + " Min-Temp = " + temp_min + " Max-Temp = " + temp_max;
    //parent.insertBefore(newElement, parent.children[0]);
    //parent.append(newElement);

};