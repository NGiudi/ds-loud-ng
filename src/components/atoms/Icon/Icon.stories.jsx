import React from "react";

import { IconDocs } from "./Icon.docs";

import { Icon, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Establece el color del ícono",
      table: {
        defaultValue: { summary: "black_700" },
      },
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del ícono de fontawensome",
      table: {
        defaultValue: { summary: "home" },
      },
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
      table: {
        defaultValue: { summary: "a-0" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer click en el ícono",
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      control: { type: "select" },
      description: "Establece el tamaño del ícono",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    spin: {
      control: { type: "boolean" },
      description:
        "Si este valor es verdadero, el ícono realizará una rotación",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  component: Icon,
  parameters: {
    docs: {
      page: IconDocs,
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
