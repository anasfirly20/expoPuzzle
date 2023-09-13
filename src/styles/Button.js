import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignSelf: "center",
    padding: 14,
    width: "90%",
    marginHorizontal: 20,
  },
  label: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  buttonSocmedContainer: {
    borderRadius: 20,
    alignSelf: "center",
    padding: 14,
    width: "90%",
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
