import React from "react";

import { Canvas, Controls, Title, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const AvatarDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Title />

        <Text margin="b-12">
          El componente avatar es parte de una interfaz de usuario que se
          utiliza comúnmente para representar a un usuario o entidad de una
          manera visualmente identificable.
        </Text>

        <Canvas />

        <Text margin="b-24" type="title" weight="semibold">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" weight="semibold">
            Representación visual:{" "}
          </Text>
          El avatar se representa inicialmente como una imagen circular. Esta
          imagen suele ser una fotografía, ilustración, o un ícono que
          identifica al usuario o entidad en cuestión. La forma circular es una
          elección de diseño común para los avatares, ya que se destaca y se ve
          atractiva.
        </Text>

        <Text margin="b-16">
          <Text as="span" weight="semibold">
            Interacciones al pasar el mouse:{" "}
          </Text>
          Cuando el usuario coloca el cursor del mouse sobre el avatar, se
          cambia el color del borde. Este efecto ayuda a indicar que el avatar
          es interactivo y puede hacer algo cuando se interactúa con él.
        </Text>

        <Text margin="b-16">
          <Text as="span" weight="semibold">
            Acción al hacer clic:{" "}
          </Text>
          Al hacer clic en el avatar, se abre un panel. El contenido de este
          panel está es el children del componente. Por lo tanto, lo que se
          muestre en el panel puede variar según el uso y el contexto.
        </Text>

        <Text margin="b-16">
          Cuando el panel está desplegado y se realiza un clic en cualquier área
          fuera de él, el componente se cierra automáticamente.
        </Text>

        <Text margin="t-40" type="title" weight="semibold">
          Propiedades
        </Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};
