import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const IconButtonDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          IconButton
        </Text>

        <Text>
          Un icon button, o botón de icono, es una pequeña pero poderosa
          herramienta de interfaz de usuario que combina la simplicidad de un
          icono con la interactividad de un botón. Este elemento visualmente
          atractivo se destaca por su capacidad para comunicar rápidamente una
          función o acción específica en una aplicación o sitio web. Al mirar un
          icon button, los usuarios pueden instantáneamente comprender su
          propósito y cómo pueden interactuar con él.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Estilos Variados:{" "}
          </Text>
          Nuestro sistema de diseño ofrece una gama de estilos de botones que se
          pueden adaptar a diferentes necesidades. Esto incluye botones de
          acción primaria, secundaria y terciaria.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Estados Interactivos:{" "}
          </Text>
          Los botones están diseñados para responder a diferentes estados
          interactivos, incluyendo estado normal, estado de hover (cursor sobre
          el botón) y estado de clic, con efectos de transición suaves y cambios
          visuales sutiles.
        </Text>

        <Text margin="b-40">
          <Text as="span" type="bodySemibold">
            Accesibilidad y Responsividad:{" "}
          </Text>
          Nos preocupamos por la accesibilidad y la responsividad, por lo que
          nuestros botones están diseñados para cumplir con algunas pautas de
          accesibilidad web.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};