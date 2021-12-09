import React from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

const Button: React.FC<Props> = ({ title, color, ...rest }) => {
  if (rest.enabled === undefined) rest.enabled = true;

  return (
    <Container
      {...rest}
      color={color}
      style={{
        opacity: rest.enabled ? 1 : 0.5,
      }}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
