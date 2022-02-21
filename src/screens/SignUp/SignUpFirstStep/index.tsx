import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import {
  Container,
  Header,
  Steps,
  SubTitle,
  Title,
  FormTitle,
  Form,
  Gap,
} from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SignUpFirstStep: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua {"\n"} conta</Title>
          <SubTitle>
            Faça seu cadastro de {"\n"}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" />
            <Gap />
            <Input iconName="mail" placeholder="E-mail" />
            <Gap />
            <Input iconName="credit-card" placeholder="CNH" />
          </Form>
          <Button title="Próximo" />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpFirstStep;
