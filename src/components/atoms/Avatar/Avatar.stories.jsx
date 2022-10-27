import React from "react";

import { Avatar, Image, Text, ThemeDS } from "../../../";

import fotoPerfil from "../../../../assets/img/foto-perfil.jpg";

const story = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    img: {
      control: { type: "text" },
      description:
        "Recibe un objeto con las propiedas que se pasan al componente Image.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    size: {
      control: { type: "select" },
      description: "Cambia el tamaño del avatar.",
      options: ["avatar", "avatarSm"],
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Avatar {...args}>
        <Image img={fotoPerfil} margin="t-10 x-50" size="sm" type="round" />

        {/*TODO: centrar con el text.*/}
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
  img: {
    alt: "profile_image",
    placeholder: "N",
  },
  size: "avatar",
};

export default story;
