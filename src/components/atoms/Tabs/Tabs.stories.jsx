import React from "react";

import { Tabs, Tab, ThemeDS } from "../../../";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
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
