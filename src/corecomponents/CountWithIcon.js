import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
export default class CountWithIcon extends Component {
  render() {
    const { iconSIze, iconName, count } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon name={iconName} size={iconSIze} color={"#d3d3d3"} />
        <Text style={{ marginLeft: 5 }}>{count}</Text>
      </View>
    );
  }
}
CountWithIcon.propTpes = {
  iconName: PropTypes.string,
  count: PropTypes.number,
  iconSIze: PropTypes.number
};
CountWithIcon.defaultProps = {
  iconSIze: 20
};
