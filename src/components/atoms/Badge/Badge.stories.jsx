import React from "react";

/* components */
import { Badge, ThemeDS } from "../../../";

const story = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: { type: "select" },
      description: "Se setea el color del fondo.",
      options: ["black", "orange"],
    },
    margin: {
      control: { type: "text" },
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
  color: "orange",
  margin: "a-10",
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Badge margin="l-10 t-10">Prueba</Badge>
      <Badge color="black" margin="l-10 t-10">
        Prueba
      </Badge>
    </ThemeDS>
  );
};

export default story;
