import React from "react";

/* components */
import { Divider, ThemeDS } from "../../../";

const story = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "string" },
      description:
        "Se setea el color del fondo, se pasa el tono de color y la intensidad.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Divider {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  margin: "y-10",
};

export default story;
