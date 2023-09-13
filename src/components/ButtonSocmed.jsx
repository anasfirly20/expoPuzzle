import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { buttonStyle } from "../styles/Button";
import { SvgXml } from "react-native-svg";

export default function ButtonSocmed({ label, backgroundColor, xml }) {
  return (
    <TouchableOpacity
      style={[buttonStyle.buttonSocmedContainer, { backgroundColor }]}
    >
      <SvgXml xml={xml} />
      <Text style={buttonStyle.label}>{label}</Text>
    </TouchableOpacity>
  );
}
