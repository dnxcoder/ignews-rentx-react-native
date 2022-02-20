import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
`;
export const IconContainer = styled.View<ContainerProps>`
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_seconday};

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background_seconday};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  flex: 1;
  padding: 0 23px;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;
