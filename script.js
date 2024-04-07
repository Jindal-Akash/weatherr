
const apiKey = "7086bdbb60b90e2a8a9b3c801f7ca151";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";

    
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    
    if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
    }
    if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    }
    if(data.weather[0].main == "snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    }

    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})