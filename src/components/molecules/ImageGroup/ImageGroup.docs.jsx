import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const ImageGroupDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          ImageGroup
        </Text>

        <Text>
          El ImageGroup es una herramienta eficiente para organizar y gestionar
          conjuntos de imágenes de manera estructurada. Su funcionalidad permite
          una presentación organizada de las imágenes, facilitando la
          visualización y la capacidad de ocultar elementos para optimizar el
          uso del espacio disponible.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Visualización de Imágenes:{" "}
          </Text>
          El componente muestra un conjunto de imágenes de manera organizada y
          estructurada.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Control de Cantidad de Imágenes:{" "}
          </Text>
          Puede limitar la cantidad máxima de imágenes que se mostrarán
          utilizando la propiedad &quot;max&quot;, lo que es útil para controlar
          la cantidad de contenido visual visible en un espacio dado.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Flexibilidad:{" "}
          </Text>
          Ofrece flexibilidad en la presentación y el diseño de las imágenes,
          permitiendo ajustar el tamaño y los márgenes según las necesidades
          específicas del proyecto.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};