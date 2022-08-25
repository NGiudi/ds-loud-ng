import React, { useState } from "react";

import { Button, ThemeDS } from "../../../";

const story = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Recibe el texto que se imprime en el botón.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Si es true el botón queda en estaba deshabilitado.",
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "Si es true el botón ocupa el total del ancho del contenedor padre.",
    },
    icon: {
      control: { type: "text" },
      description:
        "Nombre del ícono que se agrega del lado izquierdo del botón.",
    },
    kind: {
      control: { type: "text" },
      description: "Recibe el tipo de botón.",
    },
    loading: {
      control: { type: "boolean" },
      description: "Si es true se muestra un spinner de carga.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al apretar el botón",
    },
    type: {
      control: { type: "select" },
      description:
        "Recibe del tipo de botón. Sirve para hacer que el botón sea de tipo submit para formularios.",
    },
  },
};

const cellSize = {
  height: "50px",
  textAlign: "start",
  width: "120px",
};

/* all buttons. */
export const AllButtons = (args) => {
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
              <Button icon={{ name: "cog" }} onClick={() => {}}>
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
              <Button icon={{ name: "cog" }} kind="outlined" onClick={() => {}}>
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
              <Button icon={{ name: "cog" }} kind="icon" onClick={() => {}} />
            </th>

            <th style={cellSize}></th>
            <th style={cellSize}></th>

            <th style={cellSize}>
              <Button
                disabled
                icon={{ name: "cog" }}
                kind="icon"
                onClick={() => {}}
              />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

/* dinamic example*/
export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Button {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  children: "Apretame",
  icon: { name: "award" },
  kind: "solid",
};

/* form example */
export const FormExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ThemeDS>
      <form>
        <div>
          <input type="text" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input type="password" />
        </div>

        <Button
          loading={loading}
          margin="y-8"
          onClick={handleClick}
          type="submit"
        >
          Mostrar Loading
        </Button>
      </form>
    </ThemeDS>
  );
};

export default story;
