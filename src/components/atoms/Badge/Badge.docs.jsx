import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Text, ThemeDS } from "../../../";

export const BadgeDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Badge
        </Text>

        <Text>
          Un badge es un elemento visual utilizado en interfaces de usuario para
          mostrar información breve y generalmente se utiliza para representar
          un estado o una notificación.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Contenido breve:{" "}
          </Text>
          Los badges suelen contener contenido breve, como números, letras o
          iconos pequeños. Este contenido suele indicar alguna información
          específica, como la cantidad de notificaciones sin leer, un estado o
          una etiqueta.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Tamaño pequeño:{" "}
          </Text>
          Los badges son elementos pequeños y compactos que se colocan
          generalmente junto a otro elemento, como un ícono, un botón o un
          enlace, para indicar algo relacionado con ese elemento.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Diseño distintivo:{" "}
          </Text>
          Los badges a menudo tienen un diseño distintivo que los hace destacar
          en la interfaz de usuario. Esto puede incluir colores llamativos,
          bordes redondeados y un estilo que los hace fácilmente reconocibles.
        </Text>

        <Text margin="b-40">
          <Text as="span" type="bodySemibold">
            Indicador visual:{" "}
          </Text>
          El propósito principal de un badge es servir como un indicador visual
          rápido y eficaz. Pueden ayudar a los usuarios a identificar
          rápidamente elementos de interés o estados importantes en la interfaz
          de usuario.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};