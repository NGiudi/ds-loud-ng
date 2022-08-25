import React from "react";

import { Icon, ThemeDS } from "../../../";

const story = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Recibe el color del ícono.",
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del icono de fontawensome free.",
    },
    size: {
      control: { type: "select" },
      description: "Recibe el valor del tamaño del ícono.",
      options: ["sm", "md", "lg"],
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Icon {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  icon: "home",
  size: "md",
};

export const Sizes = () => {
  return (
    <ThemeDS>
      <table>
        <thead>
          <tr>
            <th style={{ padding: "5px 30px" }}>small</th>
            <th style={{ padding: "5px 30px" }}>medium</th>
            <th style={{ padding: "5px 30px" }}>large</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={{ padding: "5px 30px" }}>
              <Icon icon="cog" margin="b-8" size="sm" />
            </th>

            <th style={{ padding: "5px 30px" }}>
              <Icon icon="cog" margin="b-8" size="md" />
            </th>

            <th style={{ padding: "5px 30px" }}>
              <Icon icon="cog" margin="b-8" size="lg" />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export default story;
