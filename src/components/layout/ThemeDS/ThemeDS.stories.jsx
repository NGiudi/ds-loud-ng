import React from "react";

import { Text, ThemeDS } from "../../../";

const meta = {
  title: "Layout/ThemeDS",
  component: ThemeDS,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido del componente.",
    },
    name: {
      control: { type: "select" },
      description: "Se pasa el nombre de un tema interno del DS.",
      options: ["loudLight"],
    },
    theme: {
      control: { type: "text" },
      description: "Sirve para pasar un theme personalizado por paramentro.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Se puede utilizar un theme personalizado o utilizar un theme ya creado. Si se desea usar uno personalizado se puede pasar por medio de la propiedad theme, pero si se desea usar un theme del DS se debe usar la propiedad name.",
      },
    },
  },
};

export const DinamicColumns = () => {
  return (
    <ThemeDS name="loudLight">
      <Text margin="a-20">Only documentation</Text>
    </ThemeDS>
  );
};

export default meta;
