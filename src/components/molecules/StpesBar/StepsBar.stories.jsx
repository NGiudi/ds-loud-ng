import React, { useState } from "react";

import { Button, Flex, StepsBar, ThemeDS } from "../../../";

const meta = {
  title: "Molecules/StepsBar",
  component: StepsBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    margin: {
      control: { type: "text" },
      description: "Define la distancia de los márgenes del componente.",
    },
    step: {
      control: { type: "number" },
      description: "Indica el número del paso actual en el que se encuentra.",
    },
    steps: {
      control: { type: "array" },
      description: "Recibe un array con los nombres de los diferentes pasos.",
    },
  },
};

export const DinamicExample = (args) => {
  const [step, setStep] = useState(3);

  const nextStep = () =>
    setStep((prev) => {
      if (prev < 5) prev += 1;

      return prev;
    });

  const previusStep = () =>
    setStep((prev) => {
      if (prev > 1) prev -= 1;

      return prev;
    });

  return (
    <ThemeDS>
      <StepsBar {...args} step={step} />

      <Flex hAlign="end" margin="t-40">
        <Button onClick={previusStep}>Anterior</Button>

        <Button margin="l-8" onClick={nextStep}>
          Siguiente
        </Button>
      </Flex>
    </ThemeDS>
  );
};

DinamicExample.args = {
  steps: 4,
};

export default meta;