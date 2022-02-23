import React from "react";
import { StatusBar, View } from "react-native";
import { useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

const Confirmation: React.FC = () => {
  const navigation: any = useNavigation();
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { message, nextScreenRoute, title } = route.params as Params;

  const handleConfirm = () => {
    navigation.navigate(nextScreenRoute);
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
