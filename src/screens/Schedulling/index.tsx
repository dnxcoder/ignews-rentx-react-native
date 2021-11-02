import React, { useState } from "react";
import { useTheme } from "styled-components";
import BackButton from "../../components/BackButton";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";

import ArrowSvg from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateTitle,
  DateValue,
  DateInfo,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

const Schedulling: React.FC = () => {
  const [lastSelectedDay, setLastSelectedDay] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const theme = useTheme();
  const navigation: any = useNavigation();

  function handleConfirm() {
    navigation.navigate("SchedullingDetails");
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDay.timestamp ? date : lastSelectedDay;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDay(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
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
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default Schedulling;
