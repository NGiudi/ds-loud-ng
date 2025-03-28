import React from "react";

import { ButtonDocs } from "./Button.docs";

import { Button, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    border: {
      control: { type: "object" },
      description:
        "Este objeto define los estilos aplicados al borde del botón",
    },
    children: {
      control: { type: "object" },
      description: "Texto del contenido del botón",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Cuando se establece en true, el botón queda deshabilitado",
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "Cuando se establece en true, el botón ocupa todo el ancho del contenedor padre",
    },
    icon: {
      control: { type: "object" },
      description: "Este objeto se pasa al componente Icon dentro del botón",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el componente",
    },
    kind: {
      control: { type: "select" },
      description: "Recibe el nombre del tipo de botón",
      options: ["outlined", "solid", "text"],
    },
    loading: {
      control: { type: "boolean" },
      description:
        "Cuando se establece en true, se muestra un spinner de carga",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    onClick: {
      action: "clicked",
      description:
        "Esta función se ejecuta al presionar el botón. Sin embargo, si el botón está en modo de carga, la función no se ejecuta",
    },
    type: {
      control: { type: "select" },
      description: "Establece si el botón actua como un botón submit o no.",
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
      <Button {...args} />
    </ThemeDS>
  );
};

Model.args = {
  border: { radius: "4px" },
  children: "Apretame",
  disabled: false,
  fullWidth: false,
  icon: { icon: "award" },
  id: "button-story",
  kind: "solid",
  loading: false,
  margin: "a-0",
  onCkick: null,
  type: "button",
};

export const AllTypes = () => {
  return (
    <ThemeDS>
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
    </ThemeDS>
  );
};

export default meta;