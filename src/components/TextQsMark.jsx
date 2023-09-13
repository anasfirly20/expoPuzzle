import { View, Text } from "react-native";

// Styles
import { loginStyle } from "../styles/Login";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { qsMark } from "../assets/icons/Others";
import { homeStyle } from "../styles/Home";

export default function TextQsMark({ text }) {
  return (
    <View style={{ position: "relative", marginVertical: 15 }}>
      <Text style={[loginStyle.loginText, { color: "white" }]}>{text}</Text>
      <SvgXml xml={qsMark(20, 20, "white")} style={homeStyle.qsMark} />
    </View>
  );
}
