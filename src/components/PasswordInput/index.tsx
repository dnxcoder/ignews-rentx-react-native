import React, { useCallback, useState } from "react";
import { Container, InputText, IconContainer } from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const PasswordInput: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilityChange = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText {...rest} secureTextEntry={!isPasswordVisible} />
      <IconContainer>
        <BorderlessButton onPress={handlePasswordVisibilityChange}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </BorderlessButton>
      </IconContainer>
    </Container>
  );
};

export default PasswordInput;
