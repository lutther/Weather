import WeatherCache from "../../data/local storage/WeatherCache"
import ApiService from "../../data/services/ApiService"
import { getLocation } from "../getLocation";
import CurrentWeatherRepository from "../repository/CurrentWeatherRepository"

class CurrentWeatherUsecase {
  apiService = new ApiService();
  weatherCache = new WeatherCache();
  currentWeatherRepository = new CurrentWeatherRepository(this.apiService, this.weatherCache);

  async getCurrentWeather() {
    location = await getLocation();
    return await this.currentWeatherRepository.getCurrentWeather(location.latitude, location.longitude);
  }

  async get5DayForecast() {
    location = await getLocation();
    return await this.currentWeatherRepository.get5DayForecast(location.latitude, location.longitude);
  }
}

export default CurrentWeatherUsecase;