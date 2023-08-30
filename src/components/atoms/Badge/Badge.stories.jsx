import React from "react";

/* components */
import { Badge, ThemeDS } from "../../../";

const story = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "none",
      description: "contenido del componente",
    },
    color: {
      control: { type: "string" },
      description:
        "Se setea el color del fondo, se pasa el tono de color y la intensidad.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Badge {...args}>Prueba</Badge>
    </ThemeDS>
  );
};

DinamicExample.args = {
  color: {
    intensity: "600",
    tone: "orange",
  },
  margin: "a-10",
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Badge margin="l-10 t-10">Prueba</Badge>
      <Badge color={{ intensity: "500", tone: "black" }} margin="l-10 t-10">
        Prueba
      </Badge>
    </ThemeDS>
  );
};

export default story;
