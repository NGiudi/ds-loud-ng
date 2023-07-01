import React from "react";

import { Tabs, Tab, ThemeDS } from "../../../";

const story = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    margin: {
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      description: "Nombre que identifica el componente.",
    },
    padding: {
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
