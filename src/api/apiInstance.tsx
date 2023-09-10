/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';
export const apiInstance = axios.create({
  baseURL: 'https://konserlist.com/json-events',
  timeout: 1000,
}
);
