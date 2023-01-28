import React from "react";

import { Icon, ThemeDS } from "../../../";

const story = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: "text" },
      description:
        "Se setea el color del fondo, se pasa el tono de color y la intensidad.",
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
      <Icon icon="cog" margin="r-32" size="xl" />

      <Icon icon="cog" margin="r-32" size="lg" />

      <Icon icon="cog" margin="r-32" size="md" />

      <Icon icon="cog" size="sm" />
    </ThemeDS>
  );
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Icon color="orange" icon="cog" margin="r-32" />

      <Icon
        color={{ intensity: "700", tone: "orange" }}
        icon="cog"
        margin="r-32"
      />

      <Icon color="#AEAEAE" icon="cog" />
    </ThemeDS>
  );
};

export const Efects = () => {
  return (
    <ThemeDS>
      <Icon icon="cog" margin="r-32" spin />
    </ThemeDS>
  );
};

export default story;
