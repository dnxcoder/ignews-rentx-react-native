import React from "react";
import { View, StatusBar } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import theme from "../../styles/theme";
import { Container, Header, Title, SubTilte, Footer, Form } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <Title>
        Estamos{"\n"}
        quase lá
      </Title>
      <SubTilte>
        Faça seu login para{"\n"}
        começar uma experiência incrível.
      </SubTilte>
      <Form>
        <Input iconName="mail" />
        <Input />
      </Form>
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        ></Button>
        <Button
          color={theme.colors.background_seconday}
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={true}
          loading={false}
          light
        ></Button>
      </Footer>
    </Container>
  );
};

export default SignIn;