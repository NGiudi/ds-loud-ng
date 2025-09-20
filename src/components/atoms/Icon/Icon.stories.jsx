import React from "react";

import { IconDocs } from "./Icon.docs";

import { Box, Icon, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color del ícono. Acepta tokens de color.",
    },
    icon: {
      control: { type: "text" },
      description: "Especifica el nombre del ícono de FontAwesome a mostrar.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del ícono. Acepta tokens de espaciado.",
    },
    onClick: {
      action: "clicked",
      control: { type: "none" },
      description: "Función de callback que se ejecuta cuando se hace clic en el ícono.",
    },
    size: {
      control: { type: "select" },
      description: "Determina el tamaño del ícono.",
      options: ["sm", "md", "lg"],
    },
    spin: {
      control: { type: "boolean" },
      description: "Si es verdadero, el ícono girará continuamente.",
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
      <Box padding="b-40 t-20 x-20">
        <Icon {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  color: "black_700",
  icon: "home",
  margin: "a-0",
  onClick: null,
  size: "md",
  spin: false,
};

export const Sizes = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Icon icon="cog" margin="r-32" size="xl" />
        <Icon icon="cog" margin="r-32" size="lg" />
        <Icon icon="cog" margin="r-32" size="md" />
        <Icon icon="cog" size="sm" />
      </Box>
    </ThemeDS>
  );
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Icon color="orange" icon="cog" margin="r-32" />
        <Icon color="orange_700" icon="cog" margin="r-32" />
        <Icon color="#AEAEAE" icon="cog" />
      </Box>
    </ThemeDS>
  );
};

export const Efects = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Icon icon="cog" margin="r-32" spin />
      </Box>
    </ThemeDS>
  );
};

export default meta;