import React from "react";

import { Box, Flex, ThemeDS, Text } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Define el contenido que será renderizado dentro del componente.",
    },
    direction: {
      control: { type: "select" },
      description: "Establece la orientación del contenedor flexible (horizontal o vertical).",
      options: ["column", "row"],
    },
    hAlign: {
      control: { type: "select" },
      description: "Configura la alineación horizontal de los elementos dentro del contenedor.",
      options: ["center", "end", "space-around", "space-between", "start"],
    },
    margin: {
      control: { type: "text" },
      description: "Especifica los márgenes alrededor del contenedor.",
    },
    vAlign: {
      control: { type: "select" },
      description: "Configura la alineación vertical de los elementos dentro del contenedor.",
      options: ["center", "end", "start"],
    },
  },
  component: Flex,
  tags: ["autodocs"],
  title: "Layout/Flex",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Flex {...args}>
          <Text>Elemento 1</Text>
          <Text>Elemento 2</Text>
        </Flex>
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  children: null,
  direction: "row",
  hAlign: "space-around",
  margin: "a-0",
  vAlign: "center",
};

export const Orientaciones = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Flex hAlign="start" margin="a-30">
          <Text margin="x-10">Elemento 1</Text>
          <Text margin="x-10">Elemento 2</Text>
        </Flex>

        <Flex hAlign="space-around" margin="b-30 x-30">
          <Text margin="x-10">Elemento 1</Text>
          <Text margin="x-10">Elemento 2</Text>
        </Flex>

        <Flex hAlign="space-between" margin="b-30 x-30">
          <Text margin="x-10">Elemento 1</Text>
          <Text margin="x-10">Elemento 2</Text>
        </Flex>

        <Flex hAlign="center" margin="b-30 x-30">
          <Text margin="x-10">Elemento 1</Text>
          <Text margin="x-10">Elemento 2</Text>
        </Flex>

        <Flex hAlign="end" margin="b-30 x-30">
          <Text margin="x-10">Elemento 1</Text>
          <Text margin="x-10">Elemento 2</Text>
        </Flex>
      </Box>
    </ThemeDS>
  );
};

export default meta;