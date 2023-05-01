
const SearchBox =document.querySelector(".search input");
const SearchBtn =document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function cheackWeather(city){
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4807a7686c4f8f39d137ad840792f77c&units=metric`);
    var data= await response.json();

     console.log(data);

     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML= Math.round( data.main.temp) + "°C"; +"°C";
     document.querySelector(".humidity").innerHTML= Math.round(data.main.humidity) + "%";
     document.querySelector(".wind").innerHTML= Math.round(data.wind.speed) + "km/h";
     if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloud";
     }
     else if(data.weather[0].main== "Clear"){
     weatherIcon.src="images/clear.jpg";
     }
     else if(data.weather[0].main== "Rain"){
        weatherIcon.src="images/rain1.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main== "Mist"){
                weatherIcon.src="images/mist.png";
                }
            }

SearchBtn.addEventListener("click",()=>{
    cheackWeather(SearchBox.value);
})
 cheackWeather();
 