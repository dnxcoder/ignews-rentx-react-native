import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
// import { Container } from './styles';

const Load: React.FC = () => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
};

export default Load;
