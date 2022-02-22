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
import Button from "../../../components/Button";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PasswordInput from "../../../components/PasswordInput";
import { useTheme } from "styled-components";

const SignUpSecondStep: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

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
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput placeholder="Nome" iconName="lock" />
            <Gap />
            <PasswordInput placeholder="Repetir Senha" iconName="lock" />
            <Gap />
          </Form>
          <Button title="Cadastrar" color={theme.colors.success} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpSecondStep;
