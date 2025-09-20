import React, { useState } from "react";

import { Box, Button, Flex, ProgressBar, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    borderRound: {
      control: { type: "boolean" },
      description: "Si se establece esta propiedad, los bordes de la barra de progreso se redondean.",
    },
    margin: {
      control: { type: "text" },
      description: "Permite configurar la distancia de los márgenes alrededor de la barra de progreso.",
    },
    noShowAnimation: {
      control: { type: "boolean" },
      description: "Si esta opción es verdadera, no se muestra la animación al cambiar de step.",
    },
    onFinish: {
      control: { type: "none" },
      description:
        "Función que se ejecuta automáticamente al finalizar la animación de la barra de progreso.",
    },
    size: {
      control: { type: "select" },
      description: "Ajusta la altura de la barra de progreso y el radio de los bordes.",
      options: ["sm", "md", "lg"],
    },
    step: {
      control: { type: "number" },
      description: "Indica el paso actual en el que se encuentra la barra de progreso.",
    },
    stepTime: {
      control: { type: "number" },
      description:
        "Configura el tiempo en milisegundos que tarda en avanzar o retroceder una centésima de la barra.",
    },
    steps: {
      control: { type: "number" },
      description:
        "Define la cantidad total de pasos necesarios para completar la barra. El valor mínimo es 1; si se pasa un valor menor, se ajusta automáticamente a 1.",
    },
  },
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/ProgressBar",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <ProgressBar {...args} />
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  borderRound: false,
  margin: "a-0",
  noShowAnimation: false,
  onFinish: () => {},
  step: 2,
  stepTime: 10,
  steps: 5,
  size: "md",
};

export const Types = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <ProgressBar
          margin="b-20"
          noShowAnimation
          step={2}
          steps={5}
        />

        <ProgressBar borderRound step={2} steps={5} />
      </Box>
    </ThemeDS>
  );
};

export const useExample = () => {
  const [step, setStep] = useState(3);

  const increment = () =>
    setStep((prev) => {
      if (prev < 5) prev += 1;

      return prev;
    });

  const decrement = () =>
    setStep((prev) => {
      if (prev > 0) prev -= 1;

      return prev;
    });

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <ProgressBar step={step} stepTime={5} steps={5} />

        <Flex hAlign="end" margin="t-10">
          <Button margin="r-8" onClick={decrement}>
            decrement
          </Button>

          <Button onClick={increment}>increment</Button>
        </Flex>
      </Box>
    </ThemeDS>
  );
};

export default meta;