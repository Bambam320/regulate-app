import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Auth from './components/Auth';
import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
