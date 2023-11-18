import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeather, setForecast, setBackground, setLoading, setError } from "../state/slice/weatherSlice";
import CurrentWeatherUsecase from "../../domain/use case/CurrentWeatherUSecase";
import { daysOfWeek } from "../../util/constants";

/**
 * Manages the state and logic for fetching and updating weather data in a React component.
 * 
 * @function
 * @returns {Object} - An object containing current weather and forecast state.
 */

const weatherViewModel = () => {
  const dispatch = useDispatch();
  const {currentWeather, forecast, backgroundImage, loading, error} = useSelector(state => state.weather);
  
  useEffect(() => {
    const fetchtWeatherData = async () => {
      try {
        const weatherUseCase = new CurrentWeatherUsecase();
        const currentWeatherData = await weatherUseCase.getCurrentWeather();
        const forecastData = await weatherUseCase.get5DayForecast();

        if (currentWeatherData instanceof Error || forecastData instanceof Error) {
          dispatch(setError(currentWeatherData.message || forecastData.message))
          return
        }
        
        const {main: {temp, temp_max, temp_min}, weather: [{main}]} = currentWeatherData;

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

        dispatch(setCurrentWeather({temp,temp_max, temp_min}));
        dispatch(setForecast(forecast5Day));
        dispatch(setBackground(main));
        
      } catch(error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchtWeatherData()
  }, [])

  return { currentWeather, forecast, backgroundImage, loading, error }
}

export default weatherViewModel;