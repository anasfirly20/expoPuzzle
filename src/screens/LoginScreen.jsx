import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment, useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { brandLogo } from "../assets/icons/Brand";

// Styles
import { loginStyle } from "../styles/Login";

// Components
import {
  viewOff,
  showPass,
  hidePass,
  vk,
  yandex,
} from "../assets/icons/Others";
import CustomButton from "../components/CustomButton";
import ButtonSocmed from "../components/ButtonSocmed";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(true);

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
              onChangeText={(e) => {
                console.log(e);
              }}
            />
            <View style={loginStyle.inputPasswordContainer}>
              <TextInput
                style={loginStyle.inputPassword}
                placeholder="Пароль"
                secureTextEntry={showPassword ? true : false}
                onChangeText={(e) => {
                  console.log(e);
                }}
              />
              <Pressable
                style={loginStyle.iconHidePassword}
                onPress={() => setShowPassword(!showPassword)}
              >
                <SvgXml
                  xml={showPassword ? showPass(30, 30) : hidePass(30, 30)}
                />
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <CustomButton backgroundColor="#FF00B8" label="Войти" />
          </View>
          <TouchableOpacity style={loginStyle.forgotPassContainer}>
            <Text style={loginStyle.forgotPassText}>Не помню пароль</Text>
          </TouchableOpacity>
          <View style={loginStyle.socialMediaButtonContainer}>
            <ButtonSocmed
              label="Войти через Вконтакте"
              backgroundColor="#0077FF"
              xml={vk(25, 25)}
            />
            <ButtonSocmed
              label="Войти через Яндекс"
              backgroundColor="#FB3F1C"
              xml={yandex(23, 23)}
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
