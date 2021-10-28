import React from "react";
import { Container, Title } from "./styles";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
  title:string;
}

const ConfirmButton: React.FC<Props> = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <Title>OK</Title>
    </Container>
  );
};

export default ConfirmButton;
