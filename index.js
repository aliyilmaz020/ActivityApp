/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler'
// eslint-disable-next-line prettier/prettier
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const AppWithGestureHandler = gestureHandlerRootHOC(App);
AppRegistry.registerComponent(appName, () => AppWithGestureHandler);
