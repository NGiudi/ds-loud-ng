import React from "react";

import { Avatar, Text, ThemeDS } from "../../../";
/* 
import perfil from "../assets/img/foto_perfil.jpg";
import ojo from "../assets/img/foto_ojo.jpg";
 */
const story = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    img: {
      control: { type: "text" },
      description: "Recibe la imagen de perfil.",
    },
    isButton: {
      control: { type: "boolean" },
      description:
        "Si este valor es true, se habilita los efectos de hover y selected.",
    },
    placeholderWord: {
      control: { type: "text" },
      description:
        "Se pasa una letra que es la que se muestra si no se carga una imagen.",
    },
    size: {
      control: { type: "text" },
      description: "Cambia el tamaño del avatar.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Avatar {...args}>
        <Avatar margin="t-10 x-50" size="lg" />
        <div style={{ textAlign: "center" }}>
          <Text margin="y-20" size="lg" weight="semibold">
            Nicolás Giudice
          </Text>
        </div>
      </Avatar>
    </ThemeDS>
  );
};

DinamicExample.args = {
  isButton: true,
  placeholderWord: "N",
};

export default story;
