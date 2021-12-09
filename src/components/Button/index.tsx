import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import theme from "../../styles/theme";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  color,
  loading = false,
  ...rest
}) => {
  if (rest.enabled === undefined) rest.enabled = true;

  return (
    <Container
      {...rest}
      color={color}
      style={{
        opacity: rest.enabled === false || loading === true ? 0.5 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
