import { View, Text, StyleSheet } from "react-native";
import weatherViewModel from "../view-models/weatherViewModel";
import CurrentWeatherView from "../components/CurrentWeatherView";
import ForecastView from "../components/ForecastView";
import { SUNNY, CLOUDY, RAINY } from "../../util/constants";

/**
 * This is the parent container for CurrentWeatherView and ForecastVeiw.
 */

const WeatherScreen = () => {
  const { currentWeather, forecast, condition, loading, error } = weatherViewModel();

  var background;
  var backgdroundColor;
  var weatherCondition;

  switch (condition) {
    case "Clouds":
      background = require("../../assets/images/forest_cloudy.png");
      backgdroundColor = CLOUDY;
      weatherCondition = "CLOUDY";
      break;
    case "Rain":
      background = require("../../assets/images/forest_rainy.png");
      backgdroundColor = RAINY;
      weatherCondition = "RAINY";
      break;
    case "Sunny":
      background = require("../../assets/images/forest_sunny.png");
      backgdroundColor = SUNNY;
      weatherCondition = "SUNNY";
      break;
  }
  
  if (loading) {
    return (
      <View style={styles.loadingTextContainer}>
        <Text style={styles.loadingText}>Loading...{loading}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorMessageContainer}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CurrentWeatherView 
        currentWeather={currentWeather} 
        backgroundImage={background}
        weatherCondition={weatherCondition} />
      <ForecastView 
        forecast={forecast} 
        loading={loading} 
        backgroundColor={backgdroundColor} />
    </View>
  );
}

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  errorMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  }
})