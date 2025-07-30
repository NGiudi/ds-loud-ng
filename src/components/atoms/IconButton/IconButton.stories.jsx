import React from "react";

import { IconButtonDocs } from "./IconButton.docs";

import { IconButton, Text, ThemeDS } from "../../..";

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

export const ButtonStatuses = () => {
  return (
    <ThemeDS>
      <table>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text margin="l-8" type="bodySemibold">
                Tipo
              </Text>
            </th>
            
            <th style={cellSize}>
              <Text margin="l-8" type="bodySemibold">
                Habilitado
              </Text>
            </th>
            
            <th style={cellSize}>
              <Text margin="l-8" type="bodySemibold">
                Deshabilitado
              </Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Text margin="l-8" type="bodySemibold">
                Default
              </Text>
            </th>

            <th style={cellSize}>
              <IconButton
                icon={{ icon: "cog" }}
                margin="l-8"
                onClick={() => {}}
              />
            </th>

            <th style={cellSize}>
              <IconButton
                disabled
                icon={{ icon: "cog" }}
                margin="l-8"
                onClick={() => {}}
              />
            </th>
          </tr>

          <tr style={{ backgroundColor: "#161616" }}>
            <th style={cellSize}>
              <Text color="white" margin="l-8" type="bodySemibold">
                Invert
              </Text>
            </th>

            <th style={cellSize}>
              <IconButton
                icon={{ icon: "cog" }}
                invert
                margin="l-8"
                onClick={() => {}}
              />
            </th>

            <th style={cellSize}>
              <IconButton
                disabled
                icon={{ icon: "cog" }}
                invert
                margin="l-8"
                onClick={() => {}}
              />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export default meta;