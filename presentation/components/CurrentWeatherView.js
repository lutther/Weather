import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { WHITE } from "../../util/constants";
import { roundOfNumber } from "../../util/helpers";

/**
 * Displays the current weather.
 * 
 * @component
 */

const CurrentWeatherView = ({currentWeather, backgroundImage, weatherCondition}) => {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundContainer} source={backgroundImage} resizeMode="cover">
        <View style={styles.current}>
          <Text style={styles.temp}>{roundOfNumber(currentWeather.temp)}°</Text>
          <Text style={styles.condition}>{weatherCondition}</Text>
        </View>

        <View style={styles.weatherBottom}>
          <View style={styles.rowItem}>
            <Text style={styles.textItem}>{roundOfNumber(currentWeather.temp_min)}°</Text>
            <Text style={styles.textItem}>min</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textItem}>{roundOfNumber(currentWeather.temp)}°</Text>
            <Text style={styles.textItem}>Current</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textItem}>{roundOfNumber(currentWeather.temp_max)}°</Text>
            <Text style={styles.textItem}>max</Text>
          </View>
        </View>
        
      </ImageBackground>
    </View>
  );
}

export default CurrentWeatherView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1
  },
  current: {
    flex: 1,
    justifyContent: "center"
  },
  temp: {
    color: WHITE,
    fontSize: 80,
    fontWeight: "500",
    textAlign: "center"
  },
  condition: {
    color: WHITE,
    fontSize: 40,
    textAlign: "center"
  },
  weatherBottom: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowItem: {
    padding: 10
  },
  textItem: {
    color: WHITE,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center"
  }
})