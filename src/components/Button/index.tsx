import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps{
  title:string;
  color?:string;
  //onPress: ()=>void;
}

const Button: React.FC<Props> = ({
  title,
  color,
  ...rest
}) => {
  return <Container {...rest} color={color}>
    <Title>
      {title}
    </Title>

  </Container>;
}

export default Button;