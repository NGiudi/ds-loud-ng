import React from "react";

import { IconButtonDocs } from "./IconButton.docs";

import { Box, IconButton, Text, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    count: {
      control: { type: "number" },
      description: "Número que se muestra como contador en el botón (opcional).",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el botón cuando se establece en true.",
    },
    icon: {
      control: { type: "object" },
      description: "Objeto que define el ícono a mostrar (nombre y tamaño).",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el botón.",
    },
    invert: {
      control: { type: "boolean" },
      description: "Aplica un estilo oscuro al botón si se establece en true.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del botón.",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic en el botón.",
    },
    type: {
      control: { type: "select" },
      description: "Define el tipo de botón: 'button' o 'submit'.",
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
      <Box padding="b-40 t-20 x-20">
        <IconButton {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  count: 0,
  disabled: false,
  icon: { icon: "pencil", size: "sm" },
  id: "model_icon_button",
  invert: false,
  margin: "a-0",
  onClick: null,
  type: "button",
};

export const IconButtonStatuses = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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

              <th style={cellSize}>
                <Text margin="l-8" type="bodySemibold">
                  Con contador
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

              <th style={cellSize}>
                <IconButton
                  count={5}
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

              <th style={cellSize}>
                <IconButton
                  count={11}
                  icon={{ icon: "cog" }}
                  invert
                  margin="l-8"
                  onClick={() => {}}
                />
              </th>
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeDS>
  );
};

export default meta;