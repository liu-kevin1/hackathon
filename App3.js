import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Login from './components/Login';
import PushNotificationManager from './components/PushNotification';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },

    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    },

  },
  {
    initialRouteName: 'Home',
  } 
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    console.log("App.js > app made");

    // const [expoPushToken, setExpoPushToken] = useState('');
    // const [notification, setNotification] = useState(false);
    // const notificationListener = useRef();
    // const responseListener = useRef();

    // NotifManager = PushNotificationManager();
    // NotifManager.test(expoPushToken);

    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});