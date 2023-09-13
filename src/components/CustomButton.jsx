import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonStyle } from "../styles/Button";

export default function CustomButton({ label, backgroundColor, onPress }) {
  return (
    <TouchableOpacity
      style={[buttonStyle.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={buttonStyle.label}>{label}</Text>
    </TouchableOpacity>
  );
}
