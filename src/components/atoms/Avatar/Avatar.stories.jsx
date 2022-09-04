import React from "react";

import { Avatar, ThemeDS } from "../../../";
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
      <Avatar {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  isButton: true,
};

export default story;
