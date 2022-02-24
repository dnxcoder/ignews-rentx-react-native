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
import { api } from "../../../services/api";

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

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação.");
    }
    if (password != passwordConfirm) {
      return Alert.alert("As senhas não iguais iguais.");
    }

    // Enviar para a API e cadastrar.

    await api
      .post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          nextScreenRoute: "SignIn",
          title: "Conta Criada!",
          message: `Agora é só fazer login\ne aproveitar.`,
        });
      })
      .catch(() => {
        Alert.alert("Opa", "Não foi possível cadastrar");
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
              placeholder="Senha"
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
