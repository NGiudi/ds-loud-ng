import React from "react";

import { ImageGroupDocs } from "./ImageGroup.docs";

import { ImageGroup, ThemeDS } from "../../..";

import profileImg from "../../../assets/images/profile_photo.jpg";

const meta = {
  argTypes: {
    images: {
      control: { type: "array" },
      description: "Array de imágenes a mostrar.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    max: {
      control: { type: "number" },
      description: "Establece la cantidad máxima de imágenes que se muestran.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre de la colección de imágenes.",
    },
    size: {
      control: { type: "select" },
      description: "Establece el tamaño de las imágenes.",
      options: ["avatar", "lg", "md", "sm"],
    },
  },
  component: ImageGroup,
  parameters: {
    docs: {
      page: ImageGroupDocs,
    },
  },
  tags: ["autodocs"],
  title: "Molecules/ImageGroup",
};

export const ImageGroupModel = (args) => {
  return (
    <ThemeDS>
      <ImageGroup {...args} />
    </ThemeDS>
  );
};

ImageGroupModel.args = {
  images: [
    {
      alt: "usuario_1",
      img: profileImg,
    },
    {
      alt: "usuario_2",
      img: profileImg,
    },
    {
      alt: "usuario_3",
      img: profileImg,
    },
    {
      alt: "usuario_3",
      img: profileImg,
    },
    {
      alt: "usuario_3",
      img: profileImg,
    },
  ],
  name: "users",
  size: "sm",
};

export default meta;
