WEATHER APPLICATION
This project is a weather application that fetches and display the current weather for a given city using OpenWeatherMap API.

FEATURES
Fetches the current weather data for a specified city.
Displays the temperature and weather description

PREREQUISITIES
Node.js (v21.5.0)
NPM(v10.2.4)

INSTALLATION
git clone https://github.com/Oseun12/weather-app.git
cd weather-app
npm install

USAGE 
npm start

PROJECT STRUCTURE
`src/`: Contains the main application code.
`model/weather.ts`: Defines the WeatherData interface.
`index.ts`: Main entry point of the application, contains the logic to fetch and display weather data.

API KEY
This project uses the OpenWeatherMap API to fetch weather data. The API key is hardcoded in the Weather function. For a production application, it's recommended to store API keys in environment variables.
const apiKey = '26d2aa7d368b6eb059686e1ac4988676';

EXAMPLE
Here's an example of how the application works:

1. The `main` function sets the city to 'Nigeria'.
2. It calls the Weather function to fetch the current weather data for the specified city.
3. The weather data is logged to the console, displaying the temperature and weather description.

ERROR HANDLING
If the application fails to fetch the weather data, it throws an error with the message 'Fetching weather failed'.

LICENSE
This project is licensed under the MIT License. See the LICENSE file for details.

CONTACT
If you want to contact me, you can reach me at marrizzsalau7@gmail.com

