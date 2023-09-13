import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  bubble: {
    position: "absolute",
    backgroundColor: "#FF00B8",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    right: -12,
    top: -12,
  },
  bubbleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
