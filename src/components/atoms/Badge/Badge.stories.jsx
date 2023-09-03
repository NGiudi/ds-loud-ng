import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: "none",
      description: "Contenido del badge",
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

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Badge {...args}>Prueba</Badge>
    </ThemeDS>
  );
};

DinamicExample.args = {
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
