import React from "react";

import { IconButton, ThemeDS } from "../../..";

const story = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Si es true el botón queda en estaba deshabilitado.",
    },
    icon: {
      control: { type: "text" },
      description:
        "Nombre del ícono que se agrega del lado izquierdo del botón.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al apretar el botón",
    },
  },
};

const cellSize = {
  height: "50px",
  textAlign: "start",
  width: "120px",
};

export const AllButtons = (args) => {
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

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <IconButton {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  children: "Apretame",
  icon: { name: "award" },
  kind: "solid",
};

export default story;
