import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: {},
  forecast: {},
  condition: "",
  loading: true,
  error: "",
};

const currentWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast, setCondition, setLoading, setError } =
  currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
