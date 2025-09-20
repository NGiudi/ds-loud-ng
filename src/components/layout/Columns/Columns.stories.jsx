import React from "react";

import { ColumnsDocs } from "./Columns.docs";

import { Box, Columns, Panel, Text, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido que se renderiza dentro del componente.",
    },
    gap: {
      control: { type: "text" },
      description: "Define el espacio entre las columnas.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece los márgenes externos del componente.",
    },
    minWidth: {
      control: { type: "text" },
      description:
        "Define el ancho mínimo de cada columna. Si el ancho disponible es menor, las columnas se apilan verticalmente.",
    },
  },
  component: Columns,
  parameters: {
    docs: {
      page: ColumnsDocs,
    },
  },
  tags: ["autodocs"],
  title: "Layout/Columns",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Columns {...args}>
          <Panel padding="a-12">
            <Text margin="b-8" type="title">
              What is Lorem Ipsum?
            </Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Panel>

          <Panel align="center" padding="a-12">
            <Text margin="b-8" type="title">
              What is Lorem Ipsum?
            </Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Panel>

          <Panel align="end" padding="a-12">
            <Text margin="b-8" type="title">
              What is Lorem Ipsum?
            </Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Panel>

          <Panel padding="a-12">
            <Text margin="b-8" type="title">
              What is Lorem Ipsum?
            </Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Panel>
        </Columns>
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  children: null,
  gap: "24px",
  margin: "a-0",
  minWidth: "1000px",
};

export default meta;