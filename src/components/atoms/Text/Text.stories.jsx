import React from "react";

import { Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    margin: {
      description: "Se setea la distancia de los margenes.",
    },
    size: {
      control: { type: "select" },
      description: "Cambia el tamaño del texto.",
    },
    type: {
      control: { type: "select" },
      description:
        "separo los estilos de textos y titulos, con esta propiedad lo podemos seleccionar.",
    },
    underline: {
      control: { type: "boolean" },
      description: "subraya el texto.",
    },
    weight: {
      control: { type: "select" },
      description: "Cambia el espesor del texto.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Text {...args}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

DinamicExample.args = {
  margin: "a-12",
  size: "md",
  type: "text",
  underline: false,
  weight: "regular",
};

export const TextSizes = () => {
  return (
    <ThemeDS>
      <Text margin="y-12" size="lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const TitleSizes = () => {
  return (
    <ThemeDS>
      <Text margin="y-12" size="lg" type="title">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="md" type="title">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="sm" type="title">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const Weights = () => {
  return (
    <ThemeDS>
      <Text margin="y-12" size="lg" weight="bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="lg" weight="semibold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="lg" weight="regular">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="lg" weight="light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const TextStyles = () => {
  return (
    <ThemeDS>
      <Text margin="y-12" size="lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-12" size="md" underline>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export default story;
