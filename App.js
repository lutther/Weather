import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./presentation/state/store";
import WeatherScreen from "./presentation/screens/WeatherScreen";

export default function App() {
 
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WeatherScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
