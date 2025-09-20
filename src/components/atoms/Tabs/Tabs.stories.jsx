import React from "react";

import { Box, Tabs, Tab, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido que se mostrará dentro de cada pestaña.",
    },
    margin: {
      control: { type: "text" },
      description: "Define la distancia de los márgenes externos del componente.",
    },
    name: {
      control: { type: "text" },
      description: "Identificador único para el componente.",
    },
    padding: {
      control: { type: "text" },
      description: "Define la distancia de los rellenos internos del componente.",
    },
  },
  component: Tabs,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Components/Tabs",
};

//TODO: revisar este componente porque no se ve bien
export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Tabs {...args}>
          <Tab name="uno">Página Uno</Tab>
          <Tab name="dos">Página Dos</Tab>
          <Tab name="tres">Página Tres</Tab>
        </Tabs>
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  children: null,
  margin: "a-0",
  name: "tabs_model",
  padding: "a-0",
};

export default meta;