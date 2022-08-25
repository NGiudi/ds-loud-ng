import React, { useState } from "react";

import { Button, StepsBar, ThemeDS } from "../../../";

const story = {
  title: "Components/StepsBar",
  component: StepsBar,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    step: {
      control: { type: "number" },
      description: "Recibe el valor numerico del paso en el que se encuentra.",
    },
    steps: {
      control: { type: "array" },
      description: "Se pasa un array con el nombre de los distintos steps.",
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

      {/* TODO: usar flex  */}
      <div style={{ marginTop: "40px", textAlign: "right" }}>
        <Button onClick={previusStep}>Anterior</Button>
        <Button margin="l-8" onClick={nextStep}>
          Siguiente
        </Button>
      </div>
    </ThemeDS>
  );
};

DinamicExample.args = {
  steps: 4,
};

export default story;
