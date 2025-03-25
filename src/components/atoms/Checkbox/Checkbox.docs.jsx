import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const CheckboxDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Checkbox
        </Text>

        <Text>
          Los componentes checkbox son elementos fundamentales, diseñados para
          ofrecer una experiencia de usuario intuitiva y accesible en
          aplicaciones y sitios web. Los checkboxes permiten a los usuarios
          realizar selecciones binarias, lo que significa que pueden elegir
          entre dos estados claramente definidos, como marcado o desmarcado.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" weight="semibold">
            Etiqueta Descriptiva:{" "}
          </Text>
          Cada checkbox generalmente se asocia con una etiqueta descriptiva que
          indica su propósito o la opción que representa. Esta etiqueta aumenta
          la comprensión del usuario.
        </Text>

        <Text margin="b-40">
          <Text as="span" weight="semibold">
            Interacción Visual:{" "}
          </Text>
          Los checkboxes suelen representarse como una pequeña casilla que puede
          estar marcada (con una marca de verificación) o desmarcada (sin marca
          de verificación). Los usuarios pueden cambiar su estado haciendo clic
          o tocando la casilla.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};