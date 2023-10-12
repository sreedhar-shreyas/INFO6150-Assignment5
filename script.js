const apiKey = "a40a5e83ca510b6857fa68548fb1236a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");
let weatherConditionDisplay = document.querySelector(".weather-condition");
function Dateandtime(){
   var myDate = new Date();
   var hrs = myDate.getHours();
   var greet;
   
   if (hrs >= 5 && hrs < 11)
       greet = '🌄 Good morning, Have a Great Day ';
   else if (hrs >= 11 && hrs <= 17)
       greet = '👋 Good Afternoon ';
   else if (hrs >= 17 && hrs <= 23)
       greet = '🌆 Good evening, How was your day? ';
   else if (hrs == 24 || hrs < 5)
       greet = '🦉 Hello, night-owl.';
       
   document.getElementById('Greetings').innerHTML = greet;
}

function test(){

var insidediv = "";
var yo = " temoppp";
for (var i = 0; i < 9; i++) {
   // insidediv += '<div class="city'+i+'">City:</div> <div class="temp'+i+'">temp</div> <div class="humidity'+i+'">Humidity</div> <div class="wind'+i+'">wind</div>';
   insidediv += '<div class="insidecard"> <img src="" class="weather-icon'+i+'"/> <h1 class="temp'+i+'">test'+yo+'</h1><h2 class="city'+i+'">test</h2><p class="humidity'+i+'">test</p><p class="wind'+i+'">test</p>  <p class="weather-condition'+i+'"></p> </div>';
}
var container = document.getElementById("container");
container.innerHTML = insidediv;
// dont use checkWeather(cities);

}




async function checkWeather(){
   const cities = ["Bengaluru", "Boston", "New York City", "London", "Paris", "Delhi", "Hyderabad", "Doha", "Dubai"];

   if(document.getElementsByClassName("city8")){
      // alert("created");
      console.log(cities[0]);
   }
   let i = 0
   for(i=0;i<9; i++){
   const response = await fetch(apiUrl + cities[i] + `&appid=${apiKey}`);
   var data = await response.json();
   let weatherConditionData = data.weather[0].main;
   // var weatherConditionData = 'Clouds'

   console.log(data);

   document.querySelector(".city"+i).innerHTML = data.name;
   document.querySelector(".temp"+i).innerHTML = data.main.temp + "°C";
   document.querySelector(".humidity"+i).innerHTML = data.main.humidity + "%";
   document.querySelector(".wind"+i).innerHTML = data.wind.speed + "km/h";
   document.querySelector(".weather-condition"+i).innerText = `${weatherConditionData}`;
   var testing = document.querySelector(".weather-icon"+i);
console.log("weater"+weatherConditionData);
        // update weather icon

        switch (weatherConditionData) {
            case 'Clouds':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/clouds.png";
                break;
            case 'Tornado':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/Tornado.png";
                break;
            case 'Rain':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/rain.png";
                break;
            case 'Drizzle':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/drizzle.png";
                break;
            case 'Clear':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/clear.png";
                break;
            case 'Thunderstorm':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/thunderstorm.png";
                break;
            case 'Snow':
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/snow.png";
                break;
            case 'Mist':
            case 'Fog':
            case 'Smoke':
            case 'haze':
               document.querySelector(".weather-icon"+i).src = '../images';
                break;
            default:
               document.querySelector(".weather-icon"+i).src = "https://raw.githubusercontent.com/CarolCosta9/img/main/weather%20card%20img/other.png";
        }
}
}
Dateandtime();
test();
// checkWeather();

// async function checkWeather(cities){
//     let i = 1;
//     alert("idk");
//    //  for(i in cities){
//     const response = await fetch(apiUrl + cities1 + `&appid=${apiKey}`);
//     var data = await response.json();
//  console.log(data);alert("idk");

//  document.querySelector("city0").innerHTML = data.name;
// //  document.querySelector(".temp"+i).innerHTML = Math.round(data.main.temp) + "°C";
// //  document.querySelector(".humidity"+i).innerHTML = data.main.humidity + "%";
// //  document.querySelector(".wind"+i).innerHTML = data.wind.speed + "km/h";




// }




