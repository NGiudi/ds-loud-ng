import React from "react";

import { Avatar, Columns, Image, Text, ThemeDS } from "../../../";

import fotoPerfil from "../../../assets/img/foto-perfil.jpg";

const story = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Si el dropdown del avatar está abierto y se hace un click en cualquier lugar por fuera del area del componente, el mismo se cierra automaticamente.",
      },
    },
  },
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
    pos: {
      control: { type: "select" },
      description: "Setea la orientación del panel respecto la imagen.",
      options: ["left", "right"],
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

        <Text align="center" margin="y-20" size="lg" weight="semibold">
          Nicolás Giudice
        </Text>
      </Avatar>
    </ThemeDS>
  );
};

export const Positions = (args) => {
  return (
    <ThemeDS>
      <Columns>
        <Avatar img={{ img: fotoPerfil }}>
          <Image img={fotoPerfil} margin="t-10 x-50" size="sm" type="round" />

          <Text align="center" margin="y-20" size="lg" weight="semibold">
            Nicolás Giudice
          </Text>
        </Avatar>

        <Avatar img={{ img: fotoPerfil }} pos="right">
          <Image img={fotoPerfil} margin="t-10 x-50" size="sm" type="round" />

          <Text align="center" margin="y-20" size="lg" weight="semibold">
            Nicolás Giudice
          </Text>
        </Avatar>
      </Columns>
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
