import { useNavigation } from "@react-navigation/core";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import Car from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";

import { ActivityIndicator } from "react-native";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppoitmentsTitle,
  AppoitmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";
import Load from "../../components/Load";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
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
      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppoitmentsTitle>Agendamentos feitos</AppoitmentsTitle>
            <AppoitmentsQuantity>{cars.length}</AppoitmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};

export default MyCars;
