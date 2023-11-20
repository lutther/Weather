const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");

/**
 * The @class is responsible for caching weather data using AsyncStorage.
 */

class WeatherCache {
  /**
   * Saves current weather data to local storage.
   * @async
   * @param {Object} weather - the current weather data object.
   * @returns {Promise<void>} - A promise that resolves when data is successfully saved.
   */

  async saveCurrentWeather(weather) {
    try {
      const jsonValue = JSON.stringify(weather);
      await AsyncStorage.setItem("favoritePlace", jsonValue);
    } catch(error) {
      return error;
    }
  }

  /**
   * Retrieves previously saved current weather data from local storage
   * @async
   * @returns {Promise<Object>} - A promise that resolves with the retrieved weather data or null if the data is not found.
   */

  async getCurrentWeather() {
    try {
      const jsonValue = await AsyncStorage.getItem("favoritePlace");
      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      }
    } catch (error) {
      return error;
    }
  }

  /**
   * Saves forecast weather data to local storage.
   * 
   * @async
   * @param {Object} forecast - The forecast data object.
   * @returns {Object<void>} - A promise that resolves when data is successfully saved.
   */

  async saveForecast(forecast) {
    try {
      const jsonValue = JSON.stringify(forecast);
      await AsyncStorage.setItem("forecast", jsonValue);
    } catch (error) {
      return error;
    }
  }

  /**
   * Retrieves previously saved forecast weather data.
   * 
   * @async
   * @returns {Promise<Object>} - A promise that resolves with the retrieved forecast data or null if the data is not found.
   */

  async getForecast() {
    try {
      const jsonValue = await AsyncStorage.getItem("forecast");
      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      }
    } catch (error) {
      return error;
    }
  }
}

export default WeatherCache;