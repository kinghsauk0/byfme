import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import Splash from '../Screen/Auth/Splash';
import Loging from '../Screen/Auth/Loging';

const Stack = createNativeStackNavigator();
export default function AuthNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.SPLASH} component={Splash} />
      <Stack.Screen name={NavigationStrings.LOGING} component={Loging} />
    </Stack.Navigator>
  );
}
