import { View, Text, Image, StyleSheet } from "react-native";
import { roundOfNumber } from "../../util/helpers";

/**
 * Displays the 5 day weather forecast.
 * 
 */

const ForecastRow = ({forecast}) => {

  var background;

  switch(forecast.main) {
    case "Clouds":
      background = require("../../assets/icons/partlysunny2x.png");
      break;
    case "Rain":
      background = require("../../assets/icons/rain2x.png");
      break;
    case "Sunny":
      background = require("../../assets/icons/clear2x.png");
    case "Clear":
      background = require("../../assets/icons/clear2x.png");
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>{forecast.dayOfWeek}</Text>
      </View>
      <View style={styles.rowItem}>
        <Image style={styles.icons} source={background} />
      </View>
      <View style={styles.rowItem}>
        <Text style={[styles.textItem, styles.alignRight]}>{roundOfNumber(forecast.temp)}°</Text>
      </View>
    </View>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  textItem: {
    color: "#f9fafa",
    fontWeight: "500",
    fontSize: 18
  },
  icons: {
    alignSelf: "center"
  },
  alignRight: {
    textAlign: "right"
  },
  rowItem: {
    flex: 1
  }
});