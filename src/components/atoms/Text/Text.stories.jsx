import React from "react";

import { Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
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
      control: { type: "string" },
      description:
        "Se setea el color del fondo, se pasa el tono de color y la intensidad.",
    },
    decoration: {
      control: { type: "select" },
      description: "agregar el estilo deseado en el texto.",
      options: ["underline", "line-through"],
    },
    htmlFor: {
      control: { type: "string" },
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
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    type: {
      control: { type: "select" },
      description:
        "separo los estilos de textos y titulos, con esta propiedad lo podemos seleccionar.",
      options: [
        "bodyRegular",
        "bodySemibold",
        "captionRegular",
        "captionSemibold",
        "pageTitle",
        "subtitle",
        "title",
      ],
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

export const Types = () => {
  return (
    <ThemeDS>
      <Text margin="b-32" type="pageTitle">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-32" type="title">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="subtitle">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="bodySemibold">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="bodyRegular">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="captionSemibold">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="captionRegular">
        Lorem Ipsum is simply dummy text
      </Text>
    </ThemeDS>
  );
};

export const Sizes = () => {
  return (
    <ThemeDS>
      <Text margin="y-16" size="xl">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-16" size="lg">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-16" size="md">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-16" size="sm">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-16" size="xs">
        Lorem Ipsum is simply dummy text
      </Text>
    </ThemeDS>
  );
};

export const Weights = () => {
  return (
    <ThemeDS>
      <Text margin="y-16" weight="bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-16" weight="semibold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const Styles = () => {
  return (
    <ThemeDS>
      <Text margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="underline" margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="line-through" margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const Align = () => {
  return (
    <ThemeDS>
      <Text margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="center" margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="end" margin="y-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export default story;
