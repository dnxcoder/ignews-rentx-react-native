import React from "react";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const Input: React.FC<InputProps> = ({ iconName }) => {
  const theme = useTheme();

  return (
    <Container>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </Container>
  );
};

export default Input;
