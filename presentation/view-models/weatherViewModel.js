import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeather, setForecast, setBackground, setLoading, setError } from "../state/slice/weatherSlice";
import CurrentWeatherUsecase from "../../domain/use case/CurrentWeatherUSecase";
import { daysOfWeek } from "../../util/constants";

const weatherViewModel = () => {
  const dispatch = useDispatch();
  const {currentWeather, forecast, backgroundImage, loading, error} = useSelector(state => state.weather);
  
  useEffect(() => {
    const fetchtWeatherData = async () => {
      try {
        const weatherUseCase = new CurrentWeatherUsecase();
        const currentWeatherData = await weatherUseCase.getCurrentWeather();
        const forecastData = await weatherUseCase.get5DayForecast();

        const {main: {temp, temp_max, temp_min}, weather: [{main}]} = currentWeatherData;

        const forecast5Day = forecastData.list
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
        dispatch(setError("Error fetching weather data.", error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchtWeatherData()
  }, [])

  return { currentWeather, forecast, backgroundImage, loading, error }
}

export default weatherViewModel;