import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import CountWithIcon from "./CountWithIcon";
import styles from "../styles/ListItemStyles";
export default class ListItem extends Component {
  render() {
    const { imageSource } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageHolder}>
          {imageSource && (
            <Image source={{ uri: imageSource }} style={styles.image} />
          )}
        </View>
        <View style={styles.dataHolder}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
            {this.props.title}
          </Text>
          <View style={styles.bottomContent}>
            <CountWithIcon iconName={"thumbs-o-up"} count={this.props.ups} />
            <View style={{ marginHorizontal: 20 }}>
              <CountWithIcon
                iconName={"comment-o"}
                count={this.props.comments}
              />
            </View>

            <Text onPress={() => alert("clicked")} style={styles.viewButton}>
              {"View".toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
ListItem.propTpes = {
  imageSource: PropTypes.string,
  title: PropTypes.string,
  ups: PropTypes.number,
  comments: PropTypes.number
};
ListItem.defaultProps = {
  title: "Title"
};
