# React Native Weather Application

## Project Overview

The provided React Native project focuses on building a weather application as per requirements provided. It follows the Redux architecture for state management and utilizes React hooks for the components. The application fetches current weather and 5-day forecast data from a weather API and displays the information through various components.

### Conventions and Architecture

- **Conventions:**
  - The code follows common React and Redux conventions.
  - File and folder names are in camelCase.
  - Constants are in uppercase with underscores.
  - Redux slice names are in camelCase.

- **Architecture:**
  - Redux is used for state management.
  - React hooks are employed for components and side effects.
  - The project structure follows clean architecture with folders for data, domain, presentation, and state.

### Third-Party Dependencies

- **Redux Toolkit:** A package that simplifies Redux usage and includes utilities like `createSlice`.

- **Axios:** A promise-based HTTP client for making network requests.

- **Expo-Location:** A package that provides access to device location information.

### How to Build the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/lutther/Weather.git
   cd Weather

   npm install

2. **Run the project**
  ```bash
  npm start / sudo npm start
  yarn start / sudo yarn start
  npx expo start / sudo npx expo start

```

3. **Additional notes**
  - Ensure that the api key is set on the .env file.

  - ### Code structure
  - ##### Data
  - **local storage**: Contains the `WeatherCache` class for handling local storage for weather data.
  - **services**: Contains the `ApiService` class for making API requests.

  - ##### Domain
  - **repository**: Contains `CurrentWeatherRepository` responsible for fetching and caching weather data.
  - **use case**: Contains `CurrentWeatherUsecase` responsible for connecting the presentation layer with the repository.

  - ##### Presentation
  - **components**: Contains UI componetns `CurrentWeatherView`, `ForecastView`, `ForecastRow`.
  - **screens**: Contains `WeatherScreem` which is the parent view for `CurrentWeatherVeiw` and `ForecastView`.
  - **state**: Contains a redux slice for managing state, and a store for store configuration.
  - **view-model**: Contains `weatherViewModel` for managing state related to weather information.

  - ##### Util
  - **constants**: Contains shared configuration.
