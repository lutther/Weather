import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
}

const favoriteLocationSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter((location) => location.id !== action.payload.id);
    }
  }
})

export const { addFavorites, removeFavorites } = favoriteLocationSlice.actions;
export default favoriteLocationSlice.reducer;