import React from "react";

import { Box, ThemeDS } from "../../..";

const meta = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido del componente.",
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
      <Box {...args}>Este es un box donde se le puede pasar un margen.</Box>
    </ThemeDS>
  );
};

DinamicExample.args = {
  margin: "a-50",
};

export default meta;
