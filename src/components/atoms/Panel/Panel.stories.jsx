import React from "react";

import { Box, Panel, Text, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    align: {
      control: { type: "none" },
      description:
        "Define la alineación del contenido dentro del panel. Acepta un string.",
    },
    children: {
      control: { type: "none" },
      description: "Contenido que se renderiza dentro del panel.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes del panel.",
    },
    onSizeH: {
      control: { type: "none" },
      description: "Función que se ejecuta al cambiar la altura del panel.",
    },
    padding: {
      control: { type: "text" },
      description: "Establece la distancia de los rellenos (padding) del panel.",
    },
    type: {
      control: { type: "select" },
      description: "Cambia el color de fondo y el texto del panel.",
      options: ["error", "info", "neutral", "success", "warning"],
    },
  },
  component: Panel,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Components/Panel",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Panel {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  align: "start",
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  onSizeH: () => {},
  margin: "a-0",
  padding: "a-8",
  type: "neutral",
};

export const Types = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Panel margin="b-12">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including Lorem
            Ipsum.
          </Text>
        </Panel>

        <Panel margin="b-12" type="error">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </Panel>

        <Panel margin="b-12" type="info">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Panel>

        <Panel margin="b-12" type="success">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            centuries, but also the leap into electronic typesetting, remaining
            remaining remaining essentially unchanged. It was popularised in the
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
        </Panel>

        <Panel margin="b-12" type="warning">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
        </Panel>
      </Box>
    </ThemeDS>
  );
};

export default meta;