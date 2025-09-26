import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Text, ThemeDS } from "../../../";

export const ImageDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Image
        </Text>

        <Text margin="b-16">
          El componente de imagen es una versátil pieza visual que puede
          adaptarse a una variedad de formatos y tamaños según las necesidades
          de diseño. Este componente puede tomar la forma de un rectángulo o un
          círculo, lo que brinda flexibilidad en la presentación de imágenes en
          una interfaz de usuario o diseño gráfico.
        </Text>

        <Text margin="b-16">
          En su formato rectangular, este componente muestra imágenes en un
          marco de líneas rectas, lo que proporciona una presentación ordenada y
          adecuada para imágenes de paisajes, retratos u otros contenidos que se
          adapten a esta forma. La amplitud de opciones de tamaño permite
          mostrar imágenes pequeñas y detalladas o imágenes más grandes y
          expansivas, según lo que sea más apropiado para el contexto.
        </Text>

        <Text>
          Cuando se utiliza en formato circular, este componente crea una
          presentación más orgánica y suave para las imágenes. Esto puede ser
          particularmente útil cuando se desean destacar elementos específicos
          dentro de una imagen o cuando se busca crear un diseño más amigable y
          atractivo.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Formato adaptable:{" "}
          </Text>
          Este componente puede cambiar entre un formato rectangular y circular
          según las necesidades de diseño, lo que le brinda una gran
          flexibilidad en la presentación de imágenes.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Dimensiones personalizables:{" "}
          </Text>
          Puede ajustarse a una amplia variedad de tamaños, desde miniaturas
          pequeñas hasta imágenes de pantalla completa, lo que permite una
          presentación visual precisa según el contexto.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Adecuado para diversos tipos de imágenes:{" "}
          </Text>
          Funciona bien con imágenes de paisajes, retratos, ilustraciones,
          fotografías y otros tipos de contenido visual, adaptándose a la forma
          de la imagen de manera eficiente.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};