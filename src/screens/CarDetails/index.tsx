import React from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./styles";

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
    </Container>
  );
};

export default CarDetails;
