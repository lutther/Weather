/**
 * Handles API request related to weather data.
 * 
 * @class
 */


import axios from "axios";
import { API_KEY } from "@env"
import { BASE_URL } from "../../util/constants";

class ApiService {

  /**
   * Fetches current weather data for a given location.
   * 
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @returns {Promise<Object>}
   */


  async getCurrentWeather(lat, lon) {
    const END_POINT = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(`${BASE_URL}${END_POINT}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  /**
   * Fetches weather forecast for a given location.
   * 
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @returns {Promise<Object>} - A promise that resolves with current weather data.
   */

  async get5DayForecast(lat, lon) {
    const END_POINT = `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(`${BASE_URL}${END_POINT}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}

export default ApiService;