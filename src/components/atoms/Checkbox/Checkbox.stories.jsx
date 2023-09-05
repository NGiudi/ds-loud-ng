import React from "react";

import { CheckboxDocs } from "./Checkbox.docs";

import { Button, Checkbox, ThemeDS } from "../../../";

import { Form, Formik } from "formik";

const meta = {
  argTypes: {
    description: {
      control: { type: "string" },
      description:
        "Texto más detallado que describe la funcionalidad y contiene otras observaciones relevantes.",
    },
    id: {
      control: { type: "string" },
      description: "Identificador único para el componente",
    },
    label: {
      control: { type: "string" },
      description: "Un breve texto que describe la funcionalidad del checkbox",
    },
    name: {
      control: { type: "string" },
      description: "Nombre identificador del componente para su uso con Formik",
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

export const Model = () => {
  return (
    <ThemeDS>
      <Formik initialValues={{ email: false }}>
        <Form>
          <Checkbox
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            label="Lorem ipsum"
            name="email"
          />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

Model.args = {};

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
