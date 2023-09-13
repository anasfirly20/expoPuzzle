import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";

// Styles
import { loginStyle } from "../styles/Login";

// Components
import CustomInput from "../components/CustomInput";
import { viewOff } from "../assets/icons/Others";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={loginStyle.headerText}>Авторизация</Text>
          <SvgXml xml={brandLogo(120, 120)} style={loginStyle.logoContainer} />
          <Text style={loginStyle.loginText}>Войти</Text>
          <View style={loginStyle.inputContainer}>
            <TextInput
              style={loginStyle.inputLogin}
              placeholder="Логин или телефон"
            />
            <View style={loginStyle.inputPasswordContainer}>
              <TextInput
                style={loginStyle.inputPassword}
                placeholder="Пароль"
              />
              <SvgXml
                xml={viewOff(35, 35)}
                style={loginStyle.iconHidePassword}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
