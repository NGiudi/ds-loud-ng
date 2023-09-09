import React from "react";

import { DividerDocs } from "./Divider.docs";

import { Divider, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Establece el color del fondo.",
      table: {
        defaultValue: { summary: "black_300" },
      },
    },
    height: {
      control: { type: "text" },
      description: "Establece el espesor del divider",
      table: {
        defaultValue: { summary: "1px" },
      },
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
      table: {
        defaultValue: { summary: "a-0" },
      },
    },
  },
  component: Divider,
  parameters: {
    docs: {
      page: DividerDocs,
    },
  },
  title: "Components/Divider",
  tags: ["autodocs"],
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Divider {...args} />
    </ThemeDS>
  );
};

Model.args = {
  color: "black_300",
  height: "1px",
  margin: "y-10",
};

export default meta;
