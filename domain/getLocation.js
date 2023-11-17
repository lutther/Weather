import * as Location from 'expo-location';

export const getLocation = async () => {
  try {
    // Request permission to access the device's location
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }

    // Get the device's current location
    const location = await Location.getCurrentPositionAsync({});
    return location.coords;
  } catch (error) {
    throw new Error('Error fetching location: ' + error.message);
  }
};
