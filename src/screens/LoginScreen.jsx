import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";

// Styles
import { loginStyle } from "../styles/Login";

// Components
import { viewOff } from "../assets/icons/Others";
import CustomButton from "../components/CustomButton";

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
          <View style={{ marginTop: 20 }}>
            <CustomButton backgroundColor="#FF00B8" label="Войти" />
          </View>
          <TouchableOpacity style={loginStyle.forgotPassContainer}>
            <Text style={loginStyle.forgotPassText}>Не помню пароль</Text>
          </TouchableOpacity>
          <View style={loginStyle.socialMediaButtonContainer}>
            <CustomButton
              label="Войти через Вконтакте"
              backgroundColor="#0077FF"
            />
            <CustomButton
              label="Войти через Яндекс"
              backgroundColor="#FB3F1C"
            />
          </View>
          <TouchableOpacity style={loginStyle.forgotPassContainer}>
            <Text style={loginStyle.regisText}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
