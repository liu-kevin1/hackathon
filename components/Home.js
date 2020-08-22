import React, {Component} from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  StatusBar,
  Image,
  Share,
  ImageBackground,
} from "react-native";

class Home extends Component {
  constructor(props) {
    console.log("Home.js > home");
    super(props);
    this.state = {
      user: "test user"
    }
  }

  render() {
    return (
        // ui stuff here
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    );
  }
}

//export default Home;

const styles = StyleSheet.create({
  // style sheets here
});

//export default Test; 

export default Home;