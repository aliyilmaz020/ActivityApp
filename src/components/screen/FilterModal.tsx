/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Modal, Text, Button, Animated, ScrollView } from 'react-native';
import { FlatList, PanGestureHandler, State } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { apiInstance } from '../../api/apiInstance';
import { useQuery } from 'react-query';

const FiltrelemeModal = ({ visible, onClose }) => {
  const translateY = new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY > 100) {
        // Eğer modal 100 pikselden fazla aşağı kaydırıldıysa, modalı kapatın.
        onClose();
      } else {
        // Aksi takdirde, modalı eski pozisyonuna geri çekin.
        Animated.spring(translateY, { toValue: 0, useNativeDriver: false }).start();
      }
    }
  };
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   apiInstance.get('/etkinlikler').then((res) => {
  //     setdata(res.data);
  //     console.log("Status : " + res.status);
  //   })
  // }, [])


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            transform: [{ translateY }],
          }}
        >

          <View style={{ backgroundColor: 'white', borderTopStartRadius: 30, borderTopEndRadius: 30 }}>
            <Ionicons name='remove-outline' size={30} onPress={onClose} style={{ alignSelf: 'center' }} />
            <View >
              <Text style={{ fontSize: 25, left: 20 }}>Filtre</Text>

            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
}

export default FiltrelemeModal;
