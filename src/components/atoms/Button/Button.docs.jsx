import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Text, ThemeDS } from "../../../";

export const ButtonDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Button
        </Text>

        <Text>
          El componente Button es un elemento fundamental en nuestro sistema de
          diseño que proporciona una forma consistente y atractiva de
          interactuar con nuestra interfaz de usuario. Diseñado para mejorar la
          usabilidad y la coherencia visual en todas nuestras aplicaciones y
          plataformas, el botón es versátil y adaptable, adecuado para una
          variedad de contextos y acciones.
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
            Iconografía Integrada:{" "}
          </Text>
          Los botones pueden contener iconos junto con el texto, lo que permite
          una comunicación visual rápida y efectiva. Nuestro sistema proporciona
          una biblioteca de iconos estándar para facilitar su integración.
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