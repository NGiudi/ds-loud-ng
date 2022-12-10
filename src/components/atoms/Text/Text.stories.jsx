import React from "react";

import { Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    align: {
      control: { type: "select" },
      description: "Se setea la posición del texto.",
      options: ["center", "end", "start"],
    },
    as: {
      control: { type: "select" },
      description: "Se elegi la etiqueta del texto.",
      options: ["label", "p"],
    },
    color: {
      control: { type: "text" },
      description: "Se puede modificar el color del texto.",
    },
    decoration: {
      control: { type: "select" },
      description: "agregar el estilo deseado en el texto.",
      options: ["underline", "line-through"],
    },
    htmlFor: {
      control: { type: "text" },
      description:
        "Unicamente se debe usar para los textos que tenga la propiedad `as` con el valor `label`.",
    },
    margin: {
      description: "Se setea la distancia de los margenes.",
    },
    padding: {
      description: "Se setea la distancia de los paddings.",
    },
    size: {
      control: { type: "select" },
      description: "Cambia el tamaño del texto.",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "select" },
      description:
        "separo los estilos de textos y titulos, con esta propiedad lo podemos seleccionar.",
      options: ["text", "title"],
    },
    weight: {
      control: { type: "select" },
      description: "Cambia el espesor del texto.",
      options: ["light", "regular", "semibold", "bold"],
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
      <Text margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="underline" margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="line-through" margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const TextAlign = () => {
  return (
    <ThemeDS>
      <Text margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="center" margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="end" margin="y-12" size="md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export default story;
