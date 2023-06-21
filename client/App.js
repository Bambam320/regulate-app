import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Auth from './components/Auth';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [statusBarToggle, setStatusBarToggle] = useState(true)

  const handleButtonPress = () => {
    // Action to perform when the button is pressed
    console.log('Button pressed!');
  };

  const handleHide = () => {
    StatusBar.setHidden(true, 'slide')
    console.log('handlehide')
  }

  return (
    <View style={styles.container}>
      <Auth />
      <Text>This is the APP component.</Text>
      <Text>Blah Blah Blah Blah Blah</Text>
      <Button title="Random button!" onPress={handleButtonPress} />
      <StatusBar style="auto" onPress={handleHide}/>
    </View>
  );
}

// 1. Route interal pages somehow, learn this
// 2. figure out how to hit rails backend
// 3. ERM for backend, users, journal, meditation
// 4. Create login or home page for styling practice
// 5. complete some wireframing
// 6. verify that Expo is working

// Jared - 
// Styling, addition of libraries or CSS

// Igor -
// Route backend and hit API's
// Maybe figure out internal routing, maybe react-router? or native equivalent


//should we make a dedicated css stylesheet? how to integrate it with app?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
