/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AnaSayfa from '../screen/AnaSayfa';
import EventDetails from '../screen/EventDetails';

const AnaSayfaStackScreens = createNativeStackNavigator();

const AnaSayfaStack = () => {
  return (
    <>
      <AnaSayfaStackScreens.Navigator>
        <AnaSayfaStackScreens.Screen name='AnaSayfa' component={AnaSayfa} options={{ headerShown: false }} />
        <AnaSayfaStackScreens.Screen name='EventDetails' component={EventDetails} />
      </AnaSayfaStackScreens.Navigator>
    </>
  )
}

export default AnaSayfaStack