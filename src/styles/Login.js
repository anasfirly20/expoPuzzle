import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 15,
  },
  logoContainer: {
    alignSelf: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 25,
  },
  inputContainer: {
    marginTop: 20,
    gap: 12,
  },
  inputLogin: {
    backgroundColor: "#f2f2f7",
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  inputPasswordContainer: {
    backgroundColor: "#f2f2f7",
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    position: "relative",
  },
  inputPassword: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconHidePassword: {
    position: "absolute",
    right: 15,
    zIndex: 1,
    top: "55%",
  },
  forgotPassContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
  forgotPassText: {
    color: "#9B8B97",
    fontSize: 15,
    fontWeight: "500",
  },
  socialMediaButtonContainer: {
    marginTop: 100,
    gap: 10,
  },
  regisText: {
    fontSize: 16,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
});
