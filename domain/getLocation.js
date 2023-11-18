import * as Location from 'expo-location';

/**
 * Retrievs the current location of the device.
 * 
 * @async
 * @returns {Promise<Object>} - A promise that resolves with the coordinates of the current location.
 */

export const getLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }

    const location = await Location.getCurrentPositionAsync({});
    return location.coords;
  } catch (error) {
    throw new Error('Error fetching location: ' + error.message);
  }
};
