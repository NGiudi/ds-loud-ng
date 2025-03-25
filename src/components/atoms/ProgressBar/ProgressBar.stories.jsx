import React, { useState } from "react";

import { Button, Flex, ProgressBar, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    borderRound: {
      control: { type: "boolean" },
      description: "Si se pasa esta propiedad se redondea los bordes.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    noShowAnimationOnFirstLoad: {
      control: { type: "boolean" },
      description: "Si esta opción es true no se muestra la animación.",
    },
    onFinish: {
      control: { type: "none" },
      description:
        "Se pasa una función que se ejecuta al terminar la animación.",
    },
    size: {
      control: { type: "select" },
      description: "Modifica el alto de la progressBar y el border radius.",
      options: ["sm", "md", "lg"],
    },
    step: {
      control: { type: "number" },
      description: "Recibe el valor numerico del paso en el que se encuentra.",
    },
    stepTime: {
      control: { type: "number" },
      description:
        "Se setea el tiempo que pasa en el incremente o decremento de una centecima de la barra.",
    },
    steps: {
      control: { type: "number" },
      description:
        "Recibe la cantidad total de pasos para completar la barra. La cantidad mínima de steps es 1, si por alguna razón se pasa un valor menor se setea automáticamente a 1.",
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

export const Model = () => {
  return (
    <ThemeDS>
      <ProgressBar step={2} steps={5} />
    </ThemeDS>
  );
};

export const Types = () => {
  return (
    <ThemeDS>
      <ProgressBar
        margin="b-20"
        noShowAnimationOnFirstLoad
        step={2}
        steps={5}
      />

      <ProgressBar borderRound step={2} steps={5} />
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
      <div style={{ margin: "30px auto", width: "90%" }}>
        <ProgressBar step={step} stepTime={5} steps={5} />

        <Flex hAlign="end" margin="t-10">
          <Button margin="r-8" onClick={decrement}>
            decrement
          </Button>

          <Button onClick={increment}>increment</Button>
        </Flex>
      </div>
    </ThemeDS>
  );
};

export default meta;