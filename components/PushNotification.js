import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
//import BackgroundTimer from 'react-native-background-timer';

class PushNotificationManager {
  constructor(props) {
    console.log("yes");
    let BackgroundTimer = require('react-native-background-timer');
    console.log("yes2");
    BackgroundTimer.runBackgroundTimer(() => { 
      //code that will be called every 3 seconds 
      console.log("it lives");
    }, 
    3000);
    //rest of code will be performing for iOS on background too
    
    BackgroundTimer.stopBackgroundTimer(); //after this call all code on background stop run.

  }
  // test(expoPushToken) {
  //   this.sendPushNotification(expoPushToken, "title test", "body test");
  // }

  sendPushNotification(expoPushToken, title, body) {
    sendPushNotification2(expoPushToken, title, body)
  }
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
async function sendPushNotification2(expoPushToken, title="Test Title", body="Test Body") {
  console.log("PushNotification.js > sending push notification");
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: { data: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export default PushNotificationManager;

// BackgroundTimer.runBackgroundTimer(() => { 
//   //code that will be called every 3 seconds 
//   console.log("it lives");
// }, 
// 3000);
// //rest of code will be performing for iOS on background too

// BackgroundTimer.stopBackgroundTimer(); //after this call all code on background stop run.