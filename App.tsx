/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AnaSayfaStack from './src/components/stack/AnaSayfaStack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AnaSayfaStack" component={AnaSayfaStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}


