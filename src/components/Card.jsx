import { View, Text } from "react-native";

// Styles
import { cardStyle } from "../styles/Card";
import { SvgXml } from "react-native-svg";

export default function Card({ xml, amount }) {
  return (
    <View style={cardStyle.card}>
      <SvgXml xml={xml} />
      <View style={cardStyle.bubble}>
        <Text style={cardStyle.bubbleText}>{amount}</Text>
      </View>
    </View>
  );
}
