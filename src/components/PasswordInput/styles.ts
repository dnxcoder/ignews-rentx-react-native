import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;
export const IconContainer = styled.View`
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_seconday};
`;

export const InputText = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.background_seconday};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  flex: 1;
  padding: 0 23px;
`;

