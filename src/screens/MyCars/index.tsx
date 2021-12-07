import { useNavigation } from "@react-navigation/core";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import Car from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppoitmentsTitle,
  AppoitmentsQuantity,
} from "./styles";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

const MyCars: React.FC = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleBack() {
    navigation;
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim de aluguel
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppoitmentsTitle>Agendamentos feitos</AppoitmentsTitle>
          <AppoitmentsQuantity>{cars.length}</AppoitmentsQuantity>
        </Appointments>

        <FlatList
          data={cars}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Car data={item.car} />}
        />
      </Content>
    </Container>
  );
};

export default MyCars;
