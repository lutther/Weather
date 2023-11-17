import axios from "axios";
import { API_KEY } from "@env"
import { BASE_URL } from "../../util/constants";

class ApiService {

  async getCurrentWeather(lat, lon) {
    const END_POINT = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(`${BASE_URL}${END_POINT}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

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