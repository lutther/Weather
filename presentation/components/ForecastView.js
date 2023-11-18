import { View, Text, StyleSheet } from "react-native"
import ForecastRow from "./ForecastRow";

/**
 * This is the parent container for the 5 day weather forecast.
 * Iterates through the weater array and passes the data to the ForecastRow view.
 * 
 */

const ForecastView = ({forecast, loading, backgroundColor}) => {

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      { !loading && forecast.map((forecast, index) => <ForecastRow key={index} forecast={forecast} />)}
    </View>
  );
};

export default ForecastView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10
  }
})