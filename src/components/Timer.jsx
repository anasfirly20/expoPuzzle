import { View, Text } from "react-native";

// Styles
import { homeStyle } from "../styles/Home";

export default function Timer({ number, backgroundColor, color }) {
  return (
    <View style={[homeStyle.timer, { backgroundColor }]}>
      <Text style={[homeStyle.timerNumber, { color }]}>{number}</Text>
    </View>
  );
}
