// functional imports
import React from 'react';
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const GreyBackground = ({ children }) => {
  console.log("rendered background")
  return (props) => (
      <LinearGradient
        colors={['#333333', '#666666', '#333333']}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.2, 0.6, 0.9]}
        style={{ flex: 1 }}
      >
      {children}
    </LinearGradient>
  );
};

export default GreyBackground;