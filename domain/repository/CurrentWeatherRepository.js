class CurrentWeatherRepository {
  constructor(apiService, weatherPersistence) {
    this.apiService = apiService;
    this.weatherPersistence = weatherPersistence;
  }

  async getCurrentWeather(lat, lon) {
    try {
      const cachedWeather = await this.weatherPersistence.getCurrentWeather();
      if (cachedWeather) {
        return cachedWeather;
      }
      const weatherData = await this.apiService.getCurrentWeather(lat, lon);
      await this.weatherPersistence.saveCurrentWeather(weatherData);

      return cachedWeather;
    } catch (error) {
      console.log("Error fetching weather", error);
      throw error;
    }
  }

  async get5DayForecast(lat, lon) {
    try {
      const cachedForecast = await this.weatherPersistence.getForecast();
      if (cachedForecast) {
        return cachedForecast;
      }
      const forecastData = await this.apiService.get5DayForecast(lat, lon);
      await this.weatherPersistence.saveForecast(forecastData);

      return cachedForecast;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default CurrentWeatherRepository;