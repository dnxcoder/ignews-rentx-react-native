import React, { useCallback, useState } from "react";
import { Container, InputText, IconContainer } from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

const PasswordInput: React.FC<InputProps> = ({ iconName, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const theme = useTheme();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value); // Se tem conteudo retorna verdadeiro, se não retorna falso
  }, [isFilled, isFocused, value]);

  const handlePasswordVisibilityChange = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputText
        {...rest}
        secureTextEntry={!isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

      />
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
