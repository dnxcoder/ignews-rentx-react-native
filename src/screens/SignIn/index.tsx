import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import theme from "../../styles/theme";
import { Container, Header, Title, SubTilte, Footer, Form } from "./styles";
import * as Yup from "yup";
import { useAuth } from "../../hook/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigation: any = useNavigation();

  async function handleSignIn() {
    try {
      const schema = Yup.object({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });
      await schema.validate({ email, password });

      //Fazer login
      await signIn({ email, password });
      Alert.alert("tudo certo");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
        console.log('aqui');
      }
    }
  }

  const handleNewAccount = () => {
    navigation.navigate("SignUpFirstStep");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView behavior="position" enabled>
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
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            {/* <Input /> */}
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            ></Button>
            <Button
              color={theme.colors.background_seconday}
              title="Criar conta gratuita"
              onPress={() => {
                handleNewAccount();
              }}
              enabled={true}
              loading={false}
              light
            ></Button>
          </Footer>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
