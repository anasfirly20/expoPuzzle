import { TextInput, View } from "react-native";
import { loginStyle } from "../styles/Login";

// Miscellaneous
import { SvgXml } from "react-native-svg";
import { viewOff } from "../assets/icons/Others";

export default function CustomInput({
  placeholder,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View>
      <TextInput
        style={loginStyle.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
