import React from "react";

import { IconButton, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Cuando se establece en true, el botón queda deshabilitado",
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del ícono de fontawensome",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al presionar el IconButton",
    },
  },
  component: IconButton,
  tags: ["autodocs"],
  title: "Components/IconButton",
};

const cellSize = {
  height: "50px",
  textAlign: "start",
  width: "120px",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <IconButton {...args} />
    </ThemeDS>
  );
};

Model.args = {
  children: "Apretame",
  icon: { name: "award" },
  kind: "solid",
};

export const AllButtons = () => {
  return (
    <ThemeDS>
      <table>
        <thead>
          <tr>
            <th style={cellSize}>Defualt</th>
            <th style={cellSize}>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={cellSize}>
              <IconButton icon={{ name: "cog" }} onClick={() => {}} />
            </th>

            <th style={cellSize}>
              <IconButton disabled icon={{ name: "cog" }} onClick={() => {}} />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export default meta;
