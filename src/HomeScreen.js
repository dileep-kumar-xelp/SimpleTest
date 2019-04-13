import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.getCategories && this.props.getCategories();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
HomeScreen.propTpes = {
  getCategories: PropTypes.func
};
HomeScreen.defaultProps = {
  getCategories: null
};
