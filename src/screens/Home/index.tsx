import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Load from "../../components/Load";

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation: any = useNavigation();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data as CarDTO[]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const carDataOne = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png?wid=850",
  };
  const carDataTwo = {
    brand: "Porshe",
    name: "Pamera",
    rent: {
      period: "AO DIA",
      price: 340,
    },
    thumbnail:
      "https://www.webmotors.com.br/imagens/prod/347517/PORSCHE_PANAMERA_4.0_V8_EHYBRID_TURBO_S_EXECUTIVE_PDK_34751719030946258.png?s=fill&w=130&h=97&q=70&t=true)",
  };

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
