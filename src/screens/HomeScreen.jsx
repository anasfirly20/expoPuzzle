import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

// Styles
import { homeStyle } from "../styles/Home.js";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#393e5d" }}>
      <View>
        <Text style={homeStyle.headerText}>Розыгрыш</Text>
        <SvgXml xml={brandLogo(160, 160)} style={homeStyle.logoContainer} />
      </View>
    </SafeAreaView>
  );
}
