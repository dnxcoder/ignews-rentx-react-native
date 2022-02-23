import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

import Button from "../../../components/Button";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import PasswordInput from "../../../components/PasswordInput";
import Confirmation from "../../Confirmation";
import { useTheme } from "styled-components";

const SignUpSecondStep: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation: any = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;
  console.log(user);

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação.");
    }
    if (password != passwordConfirm) {
      return Alert.alert("As senhas não iguais iguais.");
    }

    // Enviar para a API e cadastrar.

    navigation.navigate("Confirmation", {
      nextScreenRoute: "SignIn",
      title: "Conta Criada!",
      message: `Agora é só fazer login\ne aproveitar.`,
    });
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
            <PasswordInput
              placeholder="Nome"
              iconName="lock"
              onChangeText={setPassword}
              value={password}
            />
            <Gap />
            <PasswordInput
              placeholder="Repetir Senha"
              iconName="lock"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
            <Gap />
          </Form>
          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpSecondStep;
