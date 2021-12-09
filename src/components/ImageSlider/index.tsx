import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imageUrl: string[];
}

const ImageSlider: React.FC<Props> = ({ imageUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        {imageUrl.map((_, index) => (
          <ImageIndex key={index.toString()} active={true} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imageUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ImageSlider;
