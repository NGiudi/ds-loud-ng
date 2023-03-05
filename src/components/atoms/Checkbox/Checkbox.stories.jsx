import React from "react";

import { Checkbox } from "./Checkbox";

import { ThemeDS } from "../../../";

import { Form, Formik } from "formik";

const story = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Identificador único del componente.",
    },
    label: {
      control: { type: "text" },
      description: "Recibe el texto que se muestra del lado del checkbox.",
    },
    name: {
      control: { type: "text" },
      description:
        "Bajo este nombre se guarda el valor del checkbox. Ejemplo, si este campo se llama email, el valor del campo se se guarda en el campo email.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Formik
        initialValues={{
          email: false,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <Checkbox label="Recibir emails" name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

DinamicExample.args = {};

export default story;
