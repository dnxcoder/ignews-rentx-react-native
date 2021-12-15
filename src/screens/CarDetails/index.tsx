import React from "react";
import { StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import Accessory from "../../components/Accessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

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
  const scrollY = useSharedValue(0);

  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Schedulling", { car });
  }

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    console.log(event.contentOffset.y);
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Header>
        <CarImages>
          <ImageSlider imageUrl={car.photos} />
        </CarImages>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight(),
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
      >
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
            return (
              <Accessory
                key={accesory.type}
                name={accesory.name}
                icon={getAccessoryIcon(accesory.type)}
              />
            );
          })}
        </Accessories>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
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
