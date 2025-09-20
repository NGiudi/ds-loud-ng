import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const IconDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Icon
        </Text>

        <Text>
          La capacidad de comunicar información de manera visual es fundamental
          en el diseño de interfaces de usuario modernas. Los íconos desempeñan
          un papel crucial en esta tarea al proporcionar representaciones
          gráficas concisas de acciones, elementos o conceptos dentro de una
          aplicación o sitio web. En esta introducción, exploraremos la
          importancia de los iconos en el diseño de interfaces y cómo pueden
          mejorar la experiencia del usuario al facilitar la comprensión y la
          interacción con la plataforma.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Simplicidad:{" "}
          </Text>
          Los iconos son inherentemente simples y concisos. Deben representar
          una idea o concepto de manera clara y directa, evitando la complejidad
          innecesaria.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Reconocibilidad:{" "}
          </Text>
          Un buen icono debe ser fácilmente reconocible y comprensible para los
          usuarios. Deben representar objetos, acciones o ideas de manera
          intuitiva y familiar.
        </Text>

        <Text margin="b-40">
          <Text as="span" type="bodySemibold">
            Consistencia:{" "}
          </Text>
          Los iconos deben mantener una coherencia visual en todo el diseño de
          la interfaz. Utilizar un conjunto consistente de iconos ayuda a los
          usuarios a comprender mejor las acciones y funciones en la aplicación.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};