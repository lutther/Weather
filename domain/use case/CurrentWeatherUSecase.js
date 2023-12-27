import WeatherCache from "../../data/local storage/WeatherCache"
import ApiService from "../../data/services/ApiService"
import { getLocation } from "../../data/getLocation";
import CurrentWeatherRepository from "../repository/CurrentWeatherRepository"
import { daysOfWeek } from "../../util/constants";

/**
 * Responsible for connecting the presentation layer with the repository.
 * Handles the use cases related to fetching and managing data.
 * 
 * @class
 */

class CurrentWeatherUsecase {
  apiService = new ApiService();
  weatherCache = new WeatherCache();
  currentWeatherRepository = new CurrentWeatherRepository(this.apiService, this.weatherCache);

  /**
   * Fetches the current weather data for the user's location.
   * 
   * @async
   * @returns {Promise<Object>} - A promise that resolves with the current weather data.
   */
  
  async getCurrentWeather() {
    try {
      location = await getLocation();
      const currentWeatherData = await this.currentWeatherRepository.getCurrentWeather(location.latitude, location.longitude);
      const {main: {temp, temp_max, temp_min}, weather: [{main}]} = currentWeatherData;
      return {temp, temp_max, temp_min, main};
    } catch(error) {
      throw error
    }
  }

  /**
   * Fetches the weather forecast for the user's location.
   * 
   * @async
   * @returns {Promise<Object>} - A promise that resolves with weather forecast.
   */

  async get5DayForecast() {
    try {
      location = await getLocation();
      const forecastData = await this.currentWeatherRepository.get5DayForecast(location.latitude, location.longitude);
      const forecast5Day = forecastData
        .list
        .filter(forecast => forecast.dt_txt.includes("12:00"))
        .map((item, index) => {
          const { main: { temp }, dt_txt, weather: [{main}] } = item;
          const date = new Date(dt_txt);
          const dayOfWeek = daysOfWeek[date.getDay()];
        
          return {
            dayOfWeek,
            temp,
            main
          };
        });
      return forecast5Day;
    } catch(error) {
      throw error
    }
  }
}

export default CurrentWeatherUsecase;