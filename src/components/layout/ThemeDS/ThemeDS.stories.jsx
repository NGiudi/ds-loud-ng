import React from "react";

import { Box, Text, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido que será renderizado dentro del componente.",
    },
    name: {
      control: { type: "select" },
      description: "Nombre de un tema predefinido del sistema de diseño (DS).",
      options: ["loudLight"],
    },
    theme: {
      control: { type: "text" },
      description: "Permite pasar un tema personalizado como parámetro.",
    },
  },
  component: ThemeDS,
  parameters: {
    docs: {
      description: {
        component:
          "Este componente permite utilizar un tema personalizado o un tema predefinido del sistema de diseño (DS). Para usar un tema personalizado, se debe pasar mediante la propiedad 'theme'. Para usar un tema predefinido, se debe especificar mediante la propiedad 'name'.",
      },
    },
  },
  tags: ["autodocs"],
  title: "Layout/ThemeDS",
};

export const DinamicColumns = () => {
  return (
    <ThemeDS name="loudLight">
      <Box padding="b-40 t-20 x-20">
        <Text>Only documentation</Text>
      </Box>
    </ThemeDS>
  );
};

export default meta;