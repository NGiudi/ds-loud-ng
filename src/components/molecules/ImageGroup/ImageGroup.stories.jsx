import React from "react";

import { ImageGroupDocs } from "./ImageGroup.docs";

import { ImageGroup, ThemeDS } from "../../..";

import profileImg from "../../../assets/images/profile_photo.jpg";

const meta = {
  argTypes: {
    images: {
      control: { type: "array" },
      description: "Lista de imágenes que se mostrarán en el componente.",
    },
    margin: {
      control: { type: "text" },
      description: "Define el espacio de los márgenes alrededor del componente.",
    },
    max: {
      control: { type: "number" },
      description: "Especifica la cantidad máxima de imágenes visibles.",
    },
    name: {
      control: { type: "text" },
      description: "Identificador o nombre asociado al grupo de imágenes.",
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
      src: profileImg,
    },
    {
      alt: "usuario_2",
      src: profileImg,
    },
    {
      alt: "usuario_3",
      src: profileImg,
    },
    {
      alt: "usuario_3",
      src: profileImg,
    },
    {
      alt: "usuario_3",
      src: profileImg,
    },
  ],
  name: "users",
  size: "sm",
};

export default meta;