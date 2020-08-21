import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Login from './components/Login';

const AppNavigator = createStackNavigator(
  {
    Home: {
      Screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },

    Login: {
      Screen: Login,
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