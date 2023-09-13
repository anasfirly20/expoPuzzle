import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { buttonStyle } from "../styles/Button";

export default function CustomButton({ label, backgroundColor }) {
  return (
    <TouchableOpacity style={[buttonStyle.container, { backgroundColor }]}>
      <Text style={buttonStyle.label}>{label}</Text>
    </TouchableOpacity>
  );
}
