import React from "react";

import { Columns, Panel, Text, ThemeDS } from "../../../";

const story = {
  title: "Layout/Columns",
  component: Columns,
  argTypes: {
    gap: {
      control: { type: "text" },
      description: "Recibe el valor del espacio entre columnas.",
    },
    margin: {
      control: { type: "text" },
      description:
        "Recibe el valor del ancho mínimo de cada columna. Si el ancho es menor, se pone un elemento abajo del otro.",
    },
    minWidth: {
      control: { type: "text" },
      description:
        "Recibe el valor del ancho mínimo de cada columna. Si el ancho es menor, se pone un elemento abajo del otro.",
    },
  },
};

export const DinamicColumns = (args) => {
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

DinamicColumns.args = {
  minWidth: "1000px",
};

export default story;
