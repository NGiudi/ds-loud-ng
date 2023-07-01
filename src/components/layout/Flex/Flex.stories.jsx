import React from "react";

/* import components */
import { Text } from "../../atoms";
import { ThemeDS, Flex } from "../";

const story = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    hAlign: {
      control: { type: "select" },
      description: "Se setea la alineación horizontal.",
      options: ["center", "end", "space-around", "space-between", "start"],
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    vAlign: {
      control: { type: "select" },
      description: "Se setea la alineación vertical.",
      options: ["center", "end", "start"],
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Flex {...args}>
        <Text>Elemento 1</Text>
        <Text>Elemento 2</Text>
      </Flex>
    </ThemeDS>
  );
};

DinamicExample.args = {
  hAlign: "space-around",
  margin: "a-30",
  vAlign: "center",
};

export const Orientaciones = (args) => {
  return (
    <ThemeDS>
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
    </ThemeDS>
  );
};

export default story;
