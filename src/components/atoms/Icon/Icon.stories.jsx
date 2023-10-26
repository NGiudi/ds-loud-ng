import React from "react";

import { IconDocs } from "./Icon.docs";

import { Icon, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Establece el color del ícono",
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del ícono de fontawensome",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    onClick: {
      action: "clicked",
      control: { type: "none" },
      description: "Función que se ejecuta al hacer click en el ícono",
    },
    size: {
      control: { type: "select" },
      description: "Establece el tamaño del ícono",
      options: ["sm", "md", "lg"],
    },
    spin: {
      control: { type: "boolean" },
      description:
        "Si este valor es verdadero, el ícono realizará una rotación",
    },
  },
  component: Icon,
  parameters: {
    docs: {
      page: IconDocs,
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Icon",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Icon {...args} />
    </ThemeDS>
  );
};

Model.args = {
  color: "black_700",
  icon: "home",
  margin: "a-0",
  size: "md",
  spin: false,
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

      <Icon color="orange_700" icon="cog" margin="r-32" />

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

export default meta;
