import React from "react";

/* components */
import { Text, ThemeDS } from "../../..";

import { CheckList } from "./CheckList";

const story = {
  title: "Molecules/CheckList",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido del componente",
    },
    clickable: {
      control: { type: "boolean" },
      description: "Si este valor es true se puede hacer click sobre el texto y cambia de estado.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

export const ClickableExample = () => {
  return (
    <ThemeDS>
      <CheckList clickable margin="a-10">
        <Text>Elemento 1</Text>
        <Text checked>Elemento 2</Text>
        <Text>Elemento 3</Text>
        <Text checked>Elemento 4</Text>
      </CheckList>
    </ThemeDS>
  );
};

export const Example = () => {
  return (
    <ThemeDS>
      <CheckList margin="a-10">
        <Text>Elemento 1</Text>
        <Text checked>Elemento 2</Text>
        <Text>Elemento 3</Text>
        <Text checked>Elemento 4</Text>
      </CheckList>
    </ThemeDS>
  );
};

export default story;
