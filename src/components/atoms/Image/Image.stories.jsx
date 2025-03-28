import React from "react";

import { ImageDocs } from "./Image.docs";

import { Image, Text, ThemeDS } from "../../../";

import argentina from "../../../assets/images/countries_flag/argentina.png";
import fotoPerfil from "../../../assets/images/profile_photo.jpg";

const meta = {
  argTypes: {
    alt: {
      control: { type: "text" },
      description: "Se pasa el texto alternativo de la imagen.",
    },
    src: {
      control: { type: "text" },
      description: "Se pasa la url de la imagen.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    placeholder: {
      control: { type: "text" },
      description:
        "Se puede pasar un string para mostrar la la primer letra en el placeholder.",
    },
    size: {
      control: { type: "select" },
      description: "Recibe el tamaño del componente.",
      options: ["avatar", "lg", "md", "sm"],
    },
    type: {
      control: { type: "select" },
      description: "Recibe el tipo de imagen que se desea utilizar.",
      options: ["round", "square"],
    },
  },
  component: Image,
  parameters: {
    docs: {
      page: ImageDocs,
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Image",
};

const cellSize = {
  paddingBottom: "10px",
  textAlign: "start",
  width: "200px",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Image {...args} />
    </ThemeDS>
  );
};

Model.args = {
  src: argentina,
  type: "round",
  size: "sm",
};

export const IconPlaceholder = () => {
  return (
    <ThemeDS>
      <table style={{ marginBottom: "30px" }}>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image alt="foto de perfil" size="lg" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" size="md" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" size="sm" />
            </th>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>

            <th style={cellSize}>
              <Text>Avatar</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image alt="foto de perfil" size="lg" type="round" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" size="md" type="round" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" size="sm" type="round" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" size="avatar" type="round" />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export const LetterPlaceholder = () => {
  return (
    <ThemeDS>
      <table style={{ marginBottom: "30px" }}>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image alt="foto de perfil" placeholder="load" size="lg" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" placeholder="load" size="md" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" placeholder="load" size="sm" />
            </th>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>

            <th style={cellSize}>
              <Text>Avatar</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                placeholder="load"
                size="lg"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                placeholder="load"
                size="md"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                placeholder="load"
                size="sm"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                placeholder="load"
                size="avatar"
                type="round"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export const WithImage = () => {
  return (
    <ThemeDS>
      <Text margin="b-12" type="title">
        Tamaños de las imagenes tipo square
      </Text>

      <table style={{ marginBottom: "30px" }}>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image alt="foto de perfil" src={fotoPerfil} size="lg" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" src={fotoPerfil} size="md" />
            </th>

            <th style={cellSize}>
              <Image alt="foto de perfil" src={fotoPerfil} size="sm" />
            </th>
          </tr>
        </tbody>
      </table>

      <Text margin="b-20" type="title">
        Tamaños de las imagenes tipo round
      </Text>

      <table>
        <thead>
          <tr>
            <th style={cellSize}>
              <Text>Large</Text>
            </th>

            <th style={cellSize}>
              <Text>Medium</Text>
            </th>

            <th style={cellSize}>
              <Text>Small</Text>
            </th>

            <th style={cellSize}>
              <Text>Avatar</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                src={fotoPerfil}
                size="lg"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                src={fotoPerfil}
                size="md"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                src={fotoPerfil}
                size="sm"
                type="round"
              />
            </th>

            <th style={cellSize}>
              <Image
                alt="foto de perfil"
                src={fotoPerfil}
                size="avatar"
                type="round"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </ThemeDS>
  );
};

export default meta;