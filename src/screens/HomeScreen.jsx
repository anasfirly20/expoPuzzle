import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

// Styles
import { homeStyle } from "../styles/Home.js";
import { loginStyle } from "../styles/Login.js";

// Components
import Timer from "../components/Timer.jsx";
import TextQsMark from "../components/TextQsMark.jsx";
import Card from "../components/Card.jsx";
import CustomButton from "../components/CustomButton.jsx";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";
import { airpods, iphone, macbook, rectangle } from "../assets/icons/Others";

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
          style={[loginStyle.logoContainer]}
        />
        <TextQsMark text="До начала розыгрыша" />
        <View style={homeStyle.timerContainer}>
          <Timer number={0} backgroundColor="white" color="black" />
          <Timer number={0} backgroundColor="white" color="black" />
          <Text style={homeStyle.divider}>:</Text>
          <Timer number={3} backgroundColor="#FF00B8" color="white" />
          <Timer number={5} backgroundColor="#FF00B8" color="white" />
        </View>
        <TextQsMark text="Разыгрываем сегодня" />
        <View style={loginStyle.cardsContainer}>
          <Card xml={macbook(75, 75)} amount={1} />
          <Card xml={iphone(75, 75)} amount={3} />
          <Card xml={airpods(75, 75)} amount={10} />
        </View>
        <View style={{ marginTop: 60 }}>
          <CustomButton
            backgroundColor="#FF00B8"
            label="Участвовать"
            onPress={() => {
              console.log("asd");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
