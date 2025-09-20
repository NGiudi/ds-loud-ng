import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge, Box, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Texto que se mostrará dentro del componente Badge.",
    },
    color: {
      control: { type: "text" },
      description: "Define el color de fondo del Badge.",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único asignado al componente para facilitar su referencia.",
    },
    margin: {
      control: { type: "text" },
      description: "Configura los márgenes alrededor del Badge.",
    },
  },
  component: Badge,
  parameters: {
    docs: {
      page: BadgeDocs,
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Badge",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Badge {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  children: "Prueba",
  color: "orange_600",
  id: "badge-story",
  margin: "a-0",
};

export const AllBadgesVariants = () => {
  const intensities = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Box>
          {intensities.map((intensity, idx) => {
            return (
              <Badge
                color={`orange_${intensity}`}
                key={`badge_orange_${intensity}`}
                margin={idx === 0 ? "a-0" : "l-10"}
              >
                Prueba
              </Badge>
            );
          })}
        </Box>
        
        <Box margin="t-24">
          {intensities.map((intensity, idx) => {
            return (
              <Badge
                color={`red_${intensity}`}
                key={`badge_red_${intensity}`}
                margin={idx === 0 ? "a-0" : "l-10"}
              >
                Prueba
              </Badge>
            );
          })}
        </Box>

        <Box margin="t-24">
          {intensities.map((intensity, idx) => {
            return (
              <Badge
                color={`black_${intensity}`}
                key={`badge_black_${intensity}`}
                margin={idx === 0 ? "a-0" : "l-10"}
              >
                Prueba
              </Badge>
            );
          })}
        </Box>
      </Box>
    </ThemeDS>
  );
};

export default meta;