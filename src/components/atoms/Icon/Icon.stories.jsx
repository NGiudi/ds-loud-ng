import React from "react";

import { Icon, ThemeDS } from "../../../";

const story = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Recibe el color del ícono.",
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del icono de fontawensome free.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    size: {
      control: { type: "select" },
      description: "Recibe el valor del tamaño del ícono.",
      options: ["sm", "md", "lg"],
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Icon {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  icon: "home",
  size: "md",
};

export const Sizes = () => {
  return (
    <ThemeDS>
      <Icon icon="cog" margin="r-32" size="lg" />

      <Icon icon="cog" margin="r-32" size="md" />

      <Icon icon="cog" size="sm" />
    </ThemeDS>
  );
};

export default story;
