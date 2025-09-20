import React from "react";

import { ThemeDS, Toast } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "input" },
      description: "Texto que se mostrará dentro del toast.",
    },
    type: {
      control: { type: "select" },
      description: "Define el tipo de mensaje que mostrará el toast.",
      options: ["error", "info", "success"],
    },
  },
  component: Toast,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Toast",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Toast {...args} />
    </ThemeDS>
  );
};

Model.args = {
  children: "Lorem Ipsum is simply dummy text",
  type: "error",
};

export default meta;