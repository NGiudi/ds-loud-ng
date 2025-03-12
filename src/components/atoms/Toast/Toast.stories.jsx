import React from "react";

import { ThemeDS, Toast } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "input" },
      description: "Mensaje que se mostrará en el toast.",
    },
    type: {
      control: { type: "select" },
      description: "Se setea el tipo de toast.",
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

export const Types = () => {
  return (
    <ThemeDS>
      <Toast margin="b-32" type="pageTitle">
        Lorem Ipsum is simply dummy text
      </Toast>
    </ThemeDS>
  );
};

export default meta;
