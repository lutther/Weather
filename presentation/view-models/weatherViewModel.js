import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeather, setForecast, setCondition, setLoading, setError } from "../state/slice/weatherSlice";
import CurrentWeatherUsecase from "../../domain/use case/CurrentWeatherUSecase";

/**
 * Manages the state and logic for fetching and updating weather data in a React component.
 * 
 * @function
 * @returns {Object} - An object containing current weather and forecast state.
 */

const weatherViewModel = () => {
  const dispatch = useDispatch();
  const {currentWeather, forecast, condition, loading, error} = useSelector(state => state.weather);
  
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

        dispatch(setCurrentWeather(currentWeatherData));
        dispatch(setForecast(forecastData));
        dispatch(setCondition(currentWeatherData.main));
        
      } catch(error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchtWeatherData()
  }, [])

  return { currentWeather, forecast, condition, loading, error }
}

export default weatherViewModel;