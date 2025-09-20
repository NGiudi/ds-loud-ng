import React from "react";

import { BoxDocs } from "./Box.docs";

import { Box, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido que se renderiza dentro del componente Box.",
    },
    margin: {
      control: { type: "text" },
      description: "Define el espacio exterior (margen) alrededor del componente.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espacio interior (relleno) dentro del componente.",
    },
  },
  component: Box,
  parameters: {
    docs: {
      page: BoxDocs,
    },
  },
  tags: ["autodocs"],
  title: "Layout/Box",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box {...args} />
    </ThemeDS>
  );
};

Model.args = {
  children: "Este es un box donde se le puede pasar un margen.",
  margin: "a-0",
  padding: "b-40 t-20 x-20",
};

export default meta;