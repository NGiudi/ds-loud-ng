import React from "react";

import { action } from "@storybook/addon-actions";

import { CountdownDocs } from "./Countdown.docs";

import { Countdown, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    endTime: {
      control: { type: "date", required: true },
      description:
        "Establece la fecha y hora de finalización de la cuenta regresiva.",
      type: { required: true },
    },
    formatTime: {
      control: { type: "select" },
      description:
        "Establece el formato de como se muestra la cuenta regresiva.",
      options: ["hh:mm:ss", "mm:ss", "ss"],
    },
    onFinish: {
      control: { type: "none" },
      description: "Función que se ejecuta al finalizar la cuenta regresiva.",
    },
    showZero: {
      control: { type: "boolean" },
      description: "Comienza la cuenta regresiva al pasar un valor true.",
    },
    text: {
      control: { type: "object" },
      description: "Este objeto se pasa al componente Text dentro del botón",
    },
  },
  component: Countdown,
  parameters: {
    docs: {
      page: CountdownDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Countdown",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Countdown {...args} />
    </ThemeDS>
  );
};

Model.args = {
  endTime: new Date().getTime() + 10000,
  formatTime: "hh:mm:ss",
  onFinish: action("onFinish"),
  showZero: true,
  text: {
    type: "subtitle",
  },
};

export default meta;
