import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

interface Props {
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