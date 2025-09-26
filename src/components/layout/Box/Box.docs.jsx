import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Text, ThemeDS } from "../../../";

export const BoxDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Box
        </Text>

        <Text>
          El componente Box es una herramienta para añadir estilo a tus
          elementos de manera sencilla. Actualmente, te permite controlar el
          margen, y en el futuro, ofrecerá aún más opciones de estilo desde
          nuestro Design System.
        </Text>

        <Canvas />

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};