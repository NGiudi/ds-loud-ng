import React from "react";

import { BoxDocs } from "./Box.docs";

import { Box, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido del componente",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
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

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Box {...args}>Este es un box donde se le puede pasar un margen.</Box>
    </ThemeDS>
  );
};

DinamicExample.args = {
  margin: "a-0",
};

export default meta;