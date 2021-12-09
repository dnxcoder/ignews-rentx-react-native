import React, { useState } from "react";
import { useTheme } from "styled-components";
import BackButton from "../../components/BackButton";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { CarDTO } from "../../dtos/CarDTO";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../components/Button";
import { format } from "date-fns";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

const Schedulling: React.FC = () => {
  const [lastSelectedDay, setLastSelectedDay] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const theme = useTheme();
  const navigation: any = useNavigation();

  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("SchedullingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
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

    const fistDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(fistDate)), "dd/MM/yyyy"),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
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
            {/*If it has content will return true, if it doesnt have content will return false */}
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.endFormatted}
        />
      </Footer>
    </Container>
  );
};

export default Schedulling;
