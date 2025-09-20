import React from "react";

import { Box, Text, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    align: {
      control: { type: "select" },
      description: "Define la alineación del texto.",
      options: ["center", "end", "start"],
    },
    as: {
      control: { type: "select" },
      description: "Especifica la etiqueta HTML que se utilizará para el texto.",
      options: ["label", "p", "span"],
    },
    color: {
      control: { type: "text" },
      description:
        "Establece el color del texto, indicando el tono y la intensidad.",
    },
    decoration: {
      control: { type: "select" },
      description: "Aplica un estilo decorativo al texto.",
      options: ["underline", "line-through"],
    },
    htmlFor: {
      control: { type: "text" },
      description:
        "Debe usarse únicamente cuando el texto tenga la propiedad `as` con el valor `label`.",
    },
    margin: {
      description: "Define los márgenes alrededor del texto.",
    },
    padding: {
      description: "Define el relleno interno del texto.",
    },
    type: {
      control: { type: "select" },
      description:
        "Selecciona el estilo del texto o título según la categoría deseada.",
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
  },
  component: Text,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Text",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Text {...args}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  align: "start",
  as: "p",
  color: "black_900",
  decoration: null,
  htmlFor: null,
  margin: "a-0",
  padding: "a-0",
  type: "bodyRegular",
};

export const Types = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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

        <Text type="captionRegular">
          Lorem Ipsum is simply dummy text
        </Text>
      </Box>
    </ThemeDS>
  );
};

export const Styles = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Text margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text decoration="underline" margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text decoration="line-through">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Box>
    </ThemeDS>
  );
};

export const Align = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Text margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text align="center" margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text align="end">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Box>
    </ThemeDS>
  );
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Text margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text color="orange_700" margin="b-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text color="red">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Box>
    </ThemeDS>
  );
};

export default meta;