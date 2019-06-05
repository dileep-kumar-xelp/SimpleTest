import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19647E",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F56476"
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
