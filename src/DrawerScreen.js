import React, { Component } from "react";
import { View, Text } from "react-native";
export default class DrawerScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 14, paddingVertical: 10 }}> Screen One</Text>
        <Text style={{ fontSize: 14, paddingVertical: 10 }}> Screen Two</Text>
        <Text style={{ fontSize: 14, paddingVertical: 10 }}> Screen Three</Text>
        <Text style={{ fontSize: 14, paddingVertical: 10 }}> Screen Four</Text>
      </View>
    );
  }
}
