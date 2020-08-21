import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import PushNotification from './components/PushNotification';

const AppNavigator = createStackNavigator(
  {
    PushNotification: {
      Screen: PushNotification,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: 'PushNotification',
  }
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
