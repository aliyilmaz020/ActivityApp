/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterModal from './FilterModal';
import { apiInstance } from '../../api/apiInstance';
import axios from 'axios';
import he from 'he';
import { useNavigation } from '@react-navigation/native';


const AnaSayfa = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleBackgroundPress = () => {
    if (modalVisible) {
      closeModal();
    }
  };
  const [data, setdata] = useState([]);

  useEffect(() => {
    apiInstance.get('/')
      .then(res => {
        setdata(res.data.entry);
        console.log(res.status)
      })
      .catch(err => console.log(err))

  }, []);
  const goToDetail = (item) => {
    navigation.navigate('EventDetails', { item: item });
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => goToDetail(item)} style={{ width: 327, height: 112, backgroundColor: '#ffffff', flexDirection: 'row', gap: 5, alignItems: 'center', margin: 10, padding: 10, borderRadius: 15 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <View style={{ flex: 1, flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
        <Text style={{ color: '#5669FF', fontSize: 14 }}>{item.fDate}</Text>
        <Text numberOfLines={2}>{he.decode(item.title)}</Text>
      </View>
    </Pressable>
  );


  return (
    // <TouchableWithoutFeedback onPress={handleBackgroundPress}>
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: 'auto', height: 150, backgroundColor: '#7C2195', borderBottomLeftRadius: 35, borderBottomRightRadius: 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
        <Searchbar style={{ borderRadius: 0, backgroundColor: '#7C2195', borderWidth: 1, borderColor: '#7C2195', width: 200, height: 'auto' }} iconColor="#ffffff" value={''} placeholder='Arama' placeholderTextColor={'#ffffff'} />
        <Pressable style={{ width: 90, height: 37, gap: 3, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7C2195', opacity: 0.9, borderWidth: 1 }} onPress={openModal}>
          <Ionicons name='filter-circle-outline' size={30} />
          <Text>Filtrele</Text>
        </Pressable>
        <FilterModal visible={modalVisible} onClose={closeModal} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          initialNumToRender={15}

        />
      </View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default AnaSayfa;

