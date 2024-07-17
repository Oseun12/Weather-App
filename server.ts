import axios from 'axios';
import { WeatherData } from './model/weather';

async function Weather(city: string): Promise<WeatherData> {
    const apiKey = '26d2aa7d368b6eb059686e1ac4988676';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
    
        const weatherData: WeatherData = {
            temperature: data.main.temp,
            description: data.weather[0].description
        };

        return weatherData;
    } catch (error) {
        throw new Error('Fetching weather failed');
    }
    
}

async function main() {
    try {
        const city = 'Nigeria';
        const WeatherData = await Weather(city);

        console.log(`current weather in ${city}:`);
        console.log(`Temperature: ${WeatherData.temperature}℃`);
        console.log(`Description: ${WeatherData.description}`);
    } catch (error) {
        console.error(error.message)
    }
}
 main();
