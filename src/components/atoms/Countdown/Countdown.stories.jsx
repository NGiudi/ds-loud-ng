import React from "react";

import { action } from "@storybook/addon-actions";

import { Countdown } from "./Countdown";

const story = {
  title: "Components/Countdown",
  component: Countdown,
  parameters: {
    docs: {
      description: {
        component:
          "El componente countdown es un componente que sirve para hacer cuentas regresivas, con solo pasar un valor del tipo Date ya estará  funcionando. Ahora podemos preguntarnos porque no se pasa un valor numerico en lugar de una fecha y la respuesta es simple; Al pasar un valor numérico no tenemos como saber el tiempo transcurrido si se recarga la página como si sabemos al tener el valor de una fecha.",
      },
    },
  },
  argTypes: {
    endTime: {
      control: { type: "date", required: true },
      description: "Pasa la fecha y hora de fin de la cuenta regresiva.",
      table: {
        defaultValue: { summary: "null" },
      },
      type: { required: true },
    },
    formatTime: {
      control: { type: "select" },
      description: "Formato con el cual se muestra en pantalla.",
      options: ["hh:mm:ss", "mm:ss", "ss"],
      table: {
        defaultValue: { summary: "hh:mm:ss" },
      },
    },
    onFinish: {
      control: false,
      description: "Callback que se ejecuta al terminar la cuenta regresiva.",
      table: {
        defaultValue: { summary: "null" },
      },
    },
    showZero: {
      control: { type: "boolean" },
      description: "Comienza la cuenta regresiva al pasar un valor true.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const CountdownExample = (args) => {
  return <Countdown {...args} />;
};

CountdownExample.args = {
  endTime: new Date().getTime() + 10000,
  formatTime: "hh:mm:ss",
  onFinish: action("onFinish"),
  showZero: true,
};

export default story;
