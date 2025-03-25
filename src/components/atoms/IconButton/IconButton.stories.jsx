import React from "react";

import { IconButtonDocs } from "./IconButton.docs";

import { IconButton, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Cuando se establece en true, el botón queda deshabilitado",
    },
    icon: {
      control: { type: "object" },
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
    type: {
      control: { type: "select" },
      description: "Establece si el botón actua como un botón submit o no.",
      options: ["button", "submit"],
    },
  },
  component: IconButton,
  parameters: {
    docs: {
      page: IconButtonDocs,
    },
    status: {
      type: "stable",
    },
  },
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
  disabled: false,
  icon: { icon: "pencil", size: "sm" },
  margin: "a-0",
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
              <IconButton icon={{ icon: "cog" }} onClick={() => {}} />
            </th>

            <th style={cellSize}>
              <IconButton disabled icon={{ icon: "cog" }} onClick={() => {}} />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export default meta;