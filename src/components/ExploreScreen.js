import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import ListItem from "../corecomponents/ListItem";
import styles from "../styles/HomeScreenStyles";
export default class ExploreScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.getCategories && this.props.getCategories();
  }
  renderListView = item => {
    return (
      <ListItem
        imageSource={item.data.thumbnail}
        title={item.data.title}
        ups={item.data.ups}
        comments={item.data.num_comments}
      />
    );
  };
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.theme.background }
        ]}
      >
        {this.props.categoriesList && (
          <FlatList
            contentContainerStyle={styles.list}
            data={this.props.categoriesList.children}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderListView(item)}
          />
        )}
      </View>
    );
  }
}
ExploreScreen.propTpes = {
  getCategories: PropTypes.func,
  categoriesList: PropTypes.object,
  theme: PropTypes.object
};
ExploreScreen.defaultProps = {
  getCategories: null,
  categoriesList: null
};
