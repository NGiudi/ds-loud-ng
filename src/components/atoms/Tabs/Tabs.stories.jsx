import React from "react";

import { Tabs, Tab, ThemeDS } from "../../../";

const story = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido de la tab",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      control: { type: "string" },
      description: "Nombre que identifica el componente.",
    },
    padding: {
      control: { type: "string" },
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

export default story;
