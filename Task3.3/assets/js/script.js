var city_name = document.getElementById('city_name');
var button = document.getElementById('submit');
var cityName = document.getElementsByClassName('cityName');
var temp = document.getElementsByClassName('temp');
var desc = document.getElementsByClassName('desc');


var weather = function() {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&appid=81569a43ac36efdb153982b32fd943c7')
	.then(response => response.json())
	.then(response => {
		var cityNameValue = response.name;
		var tempValue = response.main.temp - 273.15;
		var descValue = response.weather[0].description;

		cityName[0].innerHTML = "City Name: "+cityNameValue;
		temp[0].innerHTML = "Temparature: "+`<strong>${tempValue.toFixed(2)}</strong>`+" in Celcius!";
		// if (descValue == 'haze'){desc[0].innerHTML = "Description: "+`<strong>${descValue}</strong>`+`<div><img src='http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png'></div>`}
		desc[0].innerHTML = "Description: "+`<strong>${descValue}</strong>`+`<div><img src='http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png'></div>`;

		console.log(response)

	})
	.catch(err => alert('Wrong City Name!'));
}

button.addEventListener('click', weather);
