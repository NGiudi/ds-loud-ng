import React from "react";

import { Tabs, Tab, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido de la tab",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre que identifica el componente.",
    },
    padding: {
      control: { type: "text" },
      description: "Se setea la distancia de los paddings.",
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

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Tabs {...args}>
        <Tab name="uno">Página Uno</Tab>
        <Tab name="dos">Página Dos</Tab>
        <Tab name="tres">Página Tres</Tab>
      </Tabs>
    </ThemeDS>
  );
};

DinamicExample.args = {
  margin: "t-10 x-30",
};

export default meta;