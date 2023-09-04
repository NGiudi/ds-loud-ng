import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: "none",
      description: "Texto del ontenido de la badge",
    },
    color: {
      control: { type: "string" },
      description: "Establece el color del fondo.",
    },
    margin: {
      control: { type: "string" },
      description: "Establece la distancia de los márgenes",
    },
  },
  component: Badge,
  parameters: {
    docs: {
      page: BadgeDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Badge",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Badge {...args}>Prueba</Badge>
    </ThemeDS>
  );
};

Model.args = {
  color: "orange_600",
  margin: "a-10",
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Badge margin="l-10 t-10">Prueba</Badge>
      <Badge color="black_500" margin="l-10 t-10">
        Prueba
      </Badge>
    </ThemeDS>
  );
};

export default meta;
