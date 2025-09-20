import React from "react";

import { DividerDocs } from "./Divider.docs";

import { Box, Divider, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color de fondo del divisor.",
    },
    height: {
      control: { type: "text" },
      description: "Define el grosor del divisor.",
    },
    margin: {
      control: { type: "text" },
      description: "Define el espacio alrededor del divisor.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espacio interior del divisor.",
    },
  },
  component: Divider,
  parameters: {
    docs: {
      page: DividerDocs,
    },
    status: {
      type: "stable",
    },
  },
  title: "Components/Divider",
  tags: ["autodocs"],
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Divider {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  color: "black_300",
  height: "1px",
  margin: "a-0",
  padding: "a-0",
};

export default meta;