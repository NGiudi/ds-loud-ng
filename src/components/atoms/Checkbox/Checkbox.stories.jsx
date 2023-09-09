import React from "react";

import { CheckboxDocs } from "./Checkbox.docs";

import { Button, Checkbox, ThemeDS } from "../../../";

import { Form, Formik } from "formik";

const meta = {
  argTypes: {
    description: {
      control: { type: "text" },
      description:
        "Texto más detallado que describe la funcionalidad y contiene otras observaciones relevantes.",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el componente",
    },
    label: {
      control: { type: "text" },
      description: "Un breve texto que describe la funcionalidad del checkbox",
      table: {
        defaultValue: { summary: "-" },
      },
    },
    margin: {
      control: { type: "text" },
      description: "Establece la distancia de los márgenes",
    },
    name: {
      control: { type: "text" },
      description: "Nombre identificador del componente para su uso con Formik",
      table: {
        defaultValue: { summary: "-" },
      },
    },
  },
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Checkbox",
};

export const Model = (args) => {
  return (
    <ThemeDS>
      <Formik initialValues={{ email: false }}>
        <Form>
          <Checkbox {...args} />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

Model.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  id: "story-checkbox",
  label: "Lorem ipsum",
  name: "email",
  margin: "a-0",
};

export const FormExample = () => {
  return (
    <ThemeDS>
      <div style={{ maxWidth: "500px" }}>
        <Formik
          initialValues={{
            email: false,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <Form>
            <Checkbox
              description="Mantente al tanto de las últimas noticias, ofertas y actualizaciones de nuestra marca al marcar esta casilla. Recibirás correos electrónicos periódicos con información relevante sobre nuestros productos y servicios."
              label="Suscribirse a boletines informativos"
              name="email"
            />

            <Button margin="t-20" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </ThemeDS>
  );
};

export default meta;
