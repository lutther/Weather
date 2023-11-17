import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./slice/weatherSlice"
import favoriteLocationReducer from "./slice/favoriteLocationSlice";

const rootReducer = combineReducers({
  weather: currentWeatherReducer,
  favorites: favoriteLocationReducer
})

const store = configureStore({
  reducer: rootReducer
});

export default store;