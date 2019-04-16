import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { DrawerActions } from "react-navigation";
//import { changeBaseTheme } from "../actions/categories.actions";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }
  toggleTheme = () => {
    this.setState(
      { theme: this.state.theme === "light" ? "dark" : "light" },
      () => {
        this.props.changeBaseTheme(this.state.theme);
        console.log("toggle theme", this.state.theme);
      }
    );
  };
  render() {
    return (
      <View
        style={{
          height: 56,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        >
          <Icon name="ios-menu" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.toggleTheme()}
        >
          <Icon name="ios-brush" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(Header);
Header.propTypes = {
  changeBaseTheme: PropTypes.func
};
