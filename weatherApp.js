//const url = 'https://open-weather13.p.rapidapi.com/city/ghana';

  



// const getWeather = () =>{

//   fetch( url, options)
  
//   .then(response => response.json())
  
//   .then(data => console.log(data.weather[0].main))
  
//   .catch(err => console.log(err))
  
//   }
//   getWeather()



/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
//let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeather = (city) => {

    const options = {
      
      method: 'GET',
      
      headers: {
          'X-RapidAPI-Key': '5160ce870dmshd59000369f355dfp14751fjsnb03cfc176cb7',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
  }
  
    return fetch( `https://open-weather13.p.rapidapi.com/city/${city}`, options)
    
    .then(response => response.json())
    
    .then(data => data)
    
    .catch(err => console.log(err))
    
    }
    
  
  /**
   * Retrieve city input and get the weather data
   * HINT: Use the promise returned from getWeatherData()
   */
  searchCity = async () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
  const data = await getWeather(city)
  showWeatherData(data)
  }
  
  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  showWeatherData = (weatherData) => {
    //CODE GOES HERE
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('city-name').innerText = weatherData.name
  }
  