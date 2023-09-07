import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const DividerDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Divider
        </Text>

        <Text>
          El Divider es un elemento gráfico o de interfaz de usuario comúnmente
          utilizado en aplicaciones y sitios web para separar o dividir
          visualmente secciones de contenido, información o elementos dentro de
          una página. Su función principal es mejorar la legibilidad y la
          organización de la información al crear espacios visuales claros y
          definidos entre diferentes secciones o elementos en una interfaz.
        </Text>

        <Canvas />

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};
