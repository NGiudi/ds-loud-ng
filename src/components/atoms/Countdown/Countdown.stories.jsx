import React from "react";

import { action } from "storybook/actions";

import { CountdownDocs } from "./Countdown.docs";

import { Box, Countdown, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    endTime: {
      control: { type: "date", required: true },
      description:
        "Establece la fecha y hora objetivo para que termine la cuenta regresiva. Este campo es obligatorio.",
      type: { required: true },
    },
    formatTime: {
      control: { type: "select" },
      description:
        "Especifica el formato en el que se muestra el tiempo de la cuenta regresiva. Las opciones incluyen horas, minutos y segundos.",
      options: ["hh:mm:ss", "mm:ss", "ss"],
    },
    onFinish: {
      control: { type: "none" },
      description:
        "Función de callback que se ejecuta cuando la cuenta regresiva llega a cero.",
    },
    showZero: {
      control: { type: "boolean" },
      description:
        "Determina si la cuenta regresiva comienza cuando se establece en true, incluso si el valor inicial es cero.",
    },
    text: {
      control: { type: "object" },
      description:
        "Un objeto pasado al componente Text dentro de la cuenta regresiva, que permite la personalización de las propiedades del texto.",
    },
  },
  component: Countdown,
  parameters: {
    docs: {
      page: CountdownDocs,
    },
    status: {
      type: "deprecated",
    },
  },
  tags: ["autodocs"],
  title: "Components/Countdown",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Countdown {...args} />
      </Box>
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