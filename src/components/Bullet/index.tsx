import React from "react";
import { View } from "react-native";

import { Container } from "./styles";

interface Props {
  active?: boolean;
}

const Bullet: React.FC<Props> = ({ active = false }: Props) => {
  return <Container active={active}></Container>;
};

export default Bullet;
