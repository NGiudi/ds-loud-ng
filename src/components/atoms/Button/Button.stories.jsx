import React from "react";

import { ButtonDocs } from "./Button.docs";

import { Box, Button, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Contenido del botón, generalmente un texto o un nodo React.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el botón cuando se establece en true, impidiendo interacciones.",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Hace que el botón ocupe el ancho completo de su contenedor padre.",
    },
    icon: {
      control: { type: "object" },
      description: "Objeto que configura el ícono mostrado dentro del botón.",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el botón, útil para pruebas o accesibilidad.",
    },
    kind: {
      control: { type: "select" },
      description: "Define el estilo visual del botón. Puede ser outlined, solid o text.",
      options: ["outlined", "solid", "text"],
    },
    loading: {
      control: { type: "boolean" },
      description: "Muestra un indicador de carga (spinner) cuando se establece en true.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del botón, utilizando valores predefinidos.",
    },
    onClick: {
      control: { type: "function" },
      description: "Función que se ejecuta al hacer clic en el botón, excepto cuando está en modo de carga.",
    },
    type: {
      control: { type: "select" },
      description: "Especifica el tipo de botón (button o submit) para formularios.",
      options: ["button", "submit"],
    },
  },
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocs,
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Button",
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
        <Button {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  children: "Apretame",
  disabled: false,
  fullWidth: false,
  icon: { icon: "award" },
  id: "button-story",
  kind: "solid",
  loading: false,
  margin: "a-12",
  onClick: null,
  type: "button",
};

export const AllTypes = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <table>
          <thead>
            <tr>
              <th style={cellSize}>Defualt</th>
              <th style={cellSize}>With icon</th>
              <th style={cellSize}>Loading</th>
              <th style={cellSize}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={cellSize}>
                <Button onClick={() => {}}>Button</Button>
              </th>

              <th style={cellSize}>
                <Button icon={{ icon: "cog" }} onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button loading onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button disabled onClick={() => {}}>
                  Button
                </Button>
              </th>
            </tr>

            <tr>
              <th style={cellSize}>
                <Button kind="outlined" onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button icon={{ icon: "cog" }} kind="outlined" onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button kind="outlined" loading onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button disabled kind="outlined" onClick={() => {}}>
                  Button
                </Button>
              </th>
            </tr>

            <tr>
              <th style={cellSize}>
                <Button kind="text" onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button icon={{ icon: "cog" }} kind="text" onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button kind="text" loading onClick={() => {}}>
                  Button
                </Button>
              </th>

              <th style={cellSize}>
                <Button disabled kind="text" onClick={() => {}}>
                  Button
                </Button>
              </th>
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeDS>
  );
};

export default meta;