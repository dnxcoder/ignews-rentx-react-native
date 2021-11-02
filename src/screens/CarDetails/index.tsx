import React from "react";
import Accessory from "../../components/Accessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
  About,
  Accessories,
  Footer,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";

interface Params {
  car: CarDTO;
}

const CarDetails: React.FC = () => {
  const navigation: any = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Schedulling");
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={car.photos}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accesory, index) => {
            return(
              <Accessory
                key={accesory.type}
                name={accesory.name}
                icon={accelerationSvg}
              />
            );
          })}
        </Accessories>
        <About>
          {car.about}
        </About>
      </Content>
      <Footer>
        <Button
          onPress={handleConfirmRental}
          title="Escolher periodo do aluguel"
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
