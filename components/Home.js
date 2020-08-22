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
    console.log("home");
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
                Hello
            </Text>
        </View>
    );
  }
}

//export default Home;

const styles = StyleSheet.create({
  // style sheets here
});

class Test extends React.Component {
  constructor(props) {
    console.log("Test");
    super(props);
  }
}

//export default Test; 

export default Home;