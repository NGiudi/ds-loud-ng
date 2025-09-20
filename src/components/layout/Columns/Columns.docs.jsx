import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const ColumnsDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Columns
        </Text>

        <Text>
          El componente Columns es una estructura que permite organizar y
          alinear contenido en una disposición de columnas. Este componente es
          esencial para la creación de diseños flexibles y adaptables, ya que
          permite distribuir el contenido de manera equitativa en diferentes
          columnas, lo que facilita la presentación de información de manera
          ordenada y estéticamente agradable. Además, el componente Columns
          ofrece configuraciones personalizables que permiten definir el número
          de columnas, el espaciado entre ellas y la respuesta a diferentes
          tamaños de pantalla, lo que garantiza la coherencia visual y la
          usabilidad en una variedad de contextos y dispositivos dentro de un
          sistema de diseño.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Número de Columnas Personalizable:{" "}
          </Text>
          Este componente presenta un número de columnas idéntico a la cantidad
          de elementos hijos que contiene.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Espaciado Entre Columnas:{" "}
          </Text>
          Se incluye la capacidad de definir el espaciado entre las columnas.
          Esto garantiza que el contenido se distribuya de manera uniforme y que
          haya un espacio adecuado entre las columnas para mejorar la
          legibilidad y la estética.
        </Text>

        <Text margin="b-40">
          <Text as="span" type="bodySemibold">
            Flexibilidad Responsiva:{" "}
          </Text>
          El componente Columns se adapta a diferentes tamaños de pantalla y
          dispositivos. Permite definir cómo se comportará la disposición de
          columnas en pantallas más pequeñas o más grandes para mantener la
          coherencia visual.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};