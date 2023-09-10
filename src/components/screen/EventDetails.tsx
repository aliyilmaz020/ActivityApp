/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import he from 'he';

const EventDetails = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView>
      <View>
        <Image
          style={{ width: 'auto', height: 221 }}
          source={{ uri: item.image }} />
        <View style={{ margin: 24, justifyContent: 'center', gap: 24 }}>
          <Text style={{ fontWeight: '400', fontSize: 35, color: '#121212' }}>{he.decode(item.title)}</Text>
          <View style={{ width: 200, height: 53, flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <View style={{ width: 48, height: 48, backgroundColor: '#5668ff', opacity: 0.2, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
              <Ionicons name='calendar' size={30} color={'#5668ff'} />
            </View>
            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#121212' }}>{he.decode(item.title)}</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#747688' }}>Tuesday, 4:00PM - 9:00PM</Text>
            </View>
          </View>
          <View style={{ width: 'auto', height: 53, flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <View style={{ width: 48, height: 48, backgroundColor: '#5668ff', opacity: 0.2, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
              <Ionicons name='location' size={30} color={'#5668ff'} />
            </View>
            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#121212' }}>14 December, 2021</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#747688' }}>Tuesday, 4:00PM - 9:00PM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default EventDetails