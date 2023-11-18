import WeatherCache from "../../data/local storage/WeatherCache"
import ApiService from "../../data/services/ApiService"
import { getLocation } from "../getLocation";
import CurrentWeatherRepository from "../repository/CurrentWeatherRepository"

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
      return await this.currentWeatherRepository.getCurrentWeather(location.latitude, location.longitude);
    } catch(error) {
      return error
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
      return await this.currentWeatherRepository.get5DayForecast(location.latitude, location.longitude);
    } catch(error) {
      return error
    }
  }
}

export default CurrentWeatherUsecase;