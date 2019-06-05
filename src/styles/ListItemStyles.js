import { StyleSheet } from "react-native";

const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    borderRadius: 3,
    marginBottom: 5
  },
  imageHolder: {
    width: 60,
    height: 60,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#d3d3d3"
  },
  dataHolder: {
    marginLeft: 10,
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  bottomContent: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center"
  },
  viewButton: {
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 9,
    borderColor: "#d3d3d3",
    color: "#1976D2",
    fontFamily: "OpenSans-Bold"
  },
  title: {
    fontSize: 15,
    color: "#222",
    fontFamily: "Lato-Regular"
  }
});

export default ListItemStyles;
