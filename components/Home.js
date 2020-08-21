import React from "react";
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


class Home extends React.Component {
  constructor(props) {
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

const styles = StyleSheet.create({
  // style sheets here
});

export default Home;