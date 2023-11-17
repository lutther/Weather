  const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");
class WeatherCache {

  async saveCurrentWeather(weather) {
    try {
      const jsonValue = JSON.stringify(weather);
      await AsyncStorage.setItem("favoritePlace", jsonValue);
    } catch(error) {
      return error;
    }
  }

  async getCurrentWeather() {
    try {
      const jsonValue = await AsyncStorage.getItem("favoritePlace");
      if (jsonValue
         !== null) {
        return JSON.parse(jsonValue);
      }
    } catch (error) {
      return error;
    }
  }

  async saveForecast(forecast) {
    try {
      const jsonValue = JSON.stringify(forecast);
      await AsyncStorage.setItem("forecast", jsonValue);
    } catch (error) {
      return error;
    }
  }

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