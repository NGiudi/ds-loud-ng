import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/blocks";

import { Text, ThemeDS } from "../../../";

export const CountdownDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Countdown
        </Text>

        <Text>
          El componente Countdown es una herramienta diseñada para crear cuentas
          regresivas de manera sencilla. Simplemente al proporcionar una fecha,
          este componente comenzará a funcionar automáticamente. Puede surgir la
          pregunta de por qué no se utiliza un valor numérico en lugar de una
          fecha. La respuesta es bastante simple: al utilizar un valor numérico,
          no tendríamos la capacidad de realizar un seguimiento del tiempo
          transcurrido, especialmente en caso de recargar la página, mientras
          que al utilizar una fecha, disponemos de esa información claramente
          definida.
        </Text>

        <Canvas />

        <Text margin="b-16" type="title">
          Características
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Establecimiento de una fecha objetivo:{" "}
          </Text>
          La capacidad de establecer una fecha y hora específicas hacia las
          cuales se va a realizar la cuenta regresiva. Esta fecha objetivo
          representa el momento hacia el cual el contador está contando.
        </Text>

        <Text margin="b-16">
          <Text as="span" type="bodySemibold">
            Visualización:{" "}
          </Text>
          Un contador regresivo generalmente muestra de manera visible el tiempo
          restante en un formato fácil de entender, como días, horas, minutos y
          segundos, o en un formato personalizable que se adapte a las
          necesidades del usuario.
        </Text>

        <Text margin="b-40">
          <Text as="span" type="bodySemibold">
            Finalización Automática:{" "}
          </Text>
          La capacidad de realizar una acción específica cuando el contador
          llega a cero. Se ejecuta una función específica en una aplicación.
        </Text>

        <Text type="title">Propiedades</Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};