import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 15,
    color: "white",
  },
  rectangle: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  qsMark: {
    position: "absolute",
    bottom: 0,
    right: 60,
  },
  timerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
    gap: 6,
  },
  timer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 100,
  },
  timerNumber: {
    fontSize: 50,
    fontWeight: "600",
  },
  divider: {
    fontSize: 50,
    fontWeight: "600",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
});
