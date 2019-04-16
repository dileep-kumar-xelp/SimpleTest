import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#841584"
  },
  input: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    color: "black",
    backgroundColor: "#FFF",
    width: 300,
    marginBottom: 30,
    borderRadius: 3
  },
  loginText: {
    fontSize: 13,
    color: "white"
  }
});

export default LoginScreenStyles;
