/**
 * Manages the fetching and caching of current weather and forecast data.
 * 
 * @class
 */


class CurrentWeatherRepository {
  /**
   * 
   * @param {ApiService} apiService - ApiService instance for making API requests.
   * @param {WeatherCache} weatherCache - WeatherCache instance for local storage functionality.
   */
  constructor(apiService, weatherCache) {
    this.apiService = apiService;
    this.weatherCache = weatherCache;
  }

  /**
   * Fetches current weather data for a given location and caches it.
   * 
   * @async
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @returns {Promise<Object>} - A promise that resolves with the cached data.
   */

  async getCurrentWeather(lat, lon) {
    try {
      const weatherData = await this.apiService.getCurrentWeather(lat, lon);
      const cachedWeather = await this.weatherCache.getCurrentWeather();
      await this.weatherCache.saveCurrentWeather(weatherData);
      return cachedWeather;
    } catch (error) {
      console.log("Error fetching weather", error);
      throw error;
    }
  }

  /**
   * Fetches the weather forecast for a given location.
   * 
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @returns {Promise<Object>} - A promise that resolves with the cached data.
   */

  async get5DayForecast(lat, lon) {
    try {
      const forecastData = await this.apiService.get5DayForecast(lat, lon);
      const cachedForecast = await this.weatherCache.getForecast();
      await this.weatherCache.saveForecast(forecastData);
      return cachedForecast;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default CurrentWeatherRepository;