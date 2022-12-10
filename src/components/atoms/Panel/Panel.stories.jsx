import React from "react";

import { Panel, Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Panel",
  component: Panel,
  argTypes: {
    align: {
      control: false,
      description:
        "Recibe un string para alinear el contenido dentro del panel.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    padding: {
      control: { type: "text" },
      description: "Se setea la distancia de los paddings.",
    },
    type: {
      control: { type: "select" },
      description: "Cambia el color de fondo y del texto.",
      options: ["error", "info", "neutral", "success", "warning"],
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Panel {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  type: "neutral",
};

export const Types = () => {
  return (
    <ThemeDS>
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
    </ThemeDS>
  );
};

export default story;
