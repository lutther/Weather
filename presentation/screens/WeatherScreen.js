import { View, Text, StyleSheet } from "react-native";
import weatherViewModel from "../view-models/weatherViewModel";
import CurrentWeatherView from "../components/CurrentWeatherView";
import ForecastView from "../components/ForecastView";

/**
 * This is the parent container for CurrentWeatherView and ForecastVeiw.
 */

const WeatherScreen = () => {
  const { currentWeather, forecast, backgroundImage, loading, error } = weatherViewModel();

  var background;
  var backgdroundColor;
  var condition;

  switch (backgroundImage) {
    case "Clouds":
      background = require("../../assets/images/forest_cloudy.png");
      backgdroundColor = "#54717A";
      condition = "CLOUDY";
      break;
    case "Rain":
      background = require("../../assets/images/forest_rainy.png");
      backgdroundColor = "#57575D";
      condition = "RAINY";
      break;
    case "Sunny":
      background = require("../../assets/images/forest_sunny.png");
      backgdroundColor = "#47AB2F";
      condition = "SUNNY";
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
        condition={condition} />
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