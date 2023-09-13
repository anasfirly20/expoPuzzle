import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

// Styles
import { homeStyle } from "../styles/Home.js";
import { loginStyle } from "../styles/Login.js";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";
import { qsMark, rectangle } from "../assets/icons/Others";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#393e5d", position: "relative" }}
    >
      <View>
        <SvgXml xml={rectangle(390, 844)} style={homeStyle.rectangle} />
        <Text style={homeStyle.headerText}>Розыгрыш</Text>
        <SvgXml
          xml={brandLogo(160, 160, "white")}
          style={loginStyle.logoContainer}
        />
        <View style={{ position: "relative" }}>
          <Text style={[loginStyle.loginText, { color: "white" }]}>
            До начала розыгрыша
          </Text>
          <SvgXml xml={qsMark(20, 20, "white")} style={homeStyle.qsMark} />
        </View>
      </View>
    </SafeAreaView>
  );
}
