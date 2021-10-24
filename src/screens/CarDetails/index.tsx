import React from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Brand,
  Name,
  Details,
  Description,
  Rent,
  Period,
  Price,
  About
} from "./styles";

const CarDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={[
            "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png?wid=850",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Este é automóvel desportivo. Surgiu do lendário de lide indultado na
          praça Real Maestrazana de Sevilla. É um belíssimo carro para quem
          gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
