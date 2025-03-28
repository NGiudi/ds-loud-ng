import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Texto del contenido de la badge",
    },
    color: {
      control: { type: "text" },
      description: "Establece el color del fondo",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el componente",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
  },
  component: Badge,
  parameters: {
    docs: {
      page: BadgeDocs,
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Badge",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Badge {...args} />
    </ThemeDS>
  );
};

Model.args = {
  children: "Prueba",
  color: "orange_600",
  id: "badge-story",
  margin: "a-0",
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