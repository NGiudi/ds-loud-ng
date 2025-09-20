import React from "react";

import { ImageDocs } from "./Image.docs";

import { Box, Image, Text, ThemeDS } from "../../../";

import argentina from "../../../assets/images/countries_flag/argentina.png";
import fotoPerfil from "../../../assets/images/profile_photo.jpg";

const meta = {
  argTypes: {
    alt: {
      control: { type: "text" },
      description: "Texto alternativo que describe la imagen para accesibilidad.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del componente.",
    },
    placeholder: {
      control: { type: "text" },
      description:
        "Permite mostrar un texto o la primera letra como marcador de posición.",
    },
    size: {
      control: { type: "select" },
      description: "Especifica el tamaño del componente.",
      options: ["avatar", "lg", "md", "sm"],
    },
    src: {
      control: { type: "text" },
      description: "URL de la imagen que se desea mostrar.",
    },
    type: {
      control: { type: "select" },
      description: "Determina el estilo de la imagen (redonda o cuadrada).",
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
      <Box padding="b-40 t-20 x-20">
        <Image {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  alt: "model_image",
  margin: "a-0",
  placeholder: "N",
  size: "sm",
  src: argentina,
  type: "round",
};

export const IconPlaceholder = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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
      </Box>
    </ThemeDS>
  );
};

export const LetterPlaceholder = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeDS>
  );
};

export const WithImage = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeDS>
  );
};

export default meta;