import React from "react";

import { ColumnsDocs } from "./Columns.docs";

import { Columns, Panel, Text, ThemeDS } from "../../..";

const meta = {
  argTypes: {
    children: {
      control: { type: "none" },
      description: "Contenido del componente",
    },
    gap: {
      control: { type: "text" },
      description: "Establece el espacio entre columnas",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    minWidth: {
      control: { type: "text" },
      description:
        "Establece el ancho mínimo de cada columna. Si el ancho es menor a este valor, los elementos se alinean verticalmente",
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
    </ThemeDS>
  );
};

Model.args = {
  margin: "t-20",
  minWidth: "1000px",
};

export default meta;
