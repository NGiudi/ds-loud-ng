import React from "react";

import { AvatarDocs } from "./Avatar.docs";

import {
  Avatar,
  Box,
  Button,
  Columns,
  Divider,
  Flex,
  Image,
  Text,
  ThemeDS,
} from "../../../";

import fotoPerfil from "../../../assets/img/foto-perfil.jpg";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: AvatarDocs,
    },
  },
  argTypes: {
    children: {
      control: { type: "string" },
      description: "Contenido del panel",
    },
    img: {
      control: { type: "string" },
      description: "Propiedades que se pasan al componente de imagen",
    },
    margin: {
      control: { type: "string" },
      description: "Establece la distancia de los márgenes",
    },
    pos: {
      control: { type: "select" },
      description:
        "Establece la orientación del panel con respecto a la imagen",
      options: ["left", "right"],
    },
    size: {
      control: { type: "select" },
      description: "Establece el tamaño del avatar",
      options: ["avatar", "avatarSm"],
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Avatar {...args}>
        <Flex margin="l-20 y-10">
          <Image img={fotoPerfil} size="sm" type="round" />

          <Box margin="l-10">
            <Text margin="a-0" size="md" weight="semibold">
              Nicolás Giudice
            </Text>

            <Text margin="a-0" size="sm" weight="semibold">
              Desarrollador
            </Text>
          </Box>
        </Flex>

        <Divider />

        <Button border={{ radius: "0px" }} fullWidth kind="text">
          Cerrar sesión
        </Button>
      </Avatar>
    </ThemeDS>
  );
};

export const Positions = () => {
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

export default meta;
