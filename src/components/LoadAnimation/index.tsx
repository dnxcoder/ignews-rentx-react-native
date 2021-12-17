import React from "react";
import { View } from "react-native";

import loadingCar from "../../assets/loadingCar.json";

import LottieView from "lottie-react-native";

import { Container } from "./styles";

const LoadAnimation: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        loop
        style={{
          height: 200,
        }}
        resizeMode="contain"
      ></LottieView>
    </Container>
  );
};

export default LoadAnimation;
