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
    status: {
      type: "stable",
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
  margin: "a-16",
  name: "email",
};

export const FormExample = () => {
  return (
    <ThemeDS>
      <div style={{ maxWidth: "500px" }}>
        <Formik
          initialValues={{
            email: false,
            recommendations: true,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <Form>
            <Checkbox
              description="Mantente al tanto de las últimas noticias, ofertas y actualizaciones de nuestra marca al marcar esta casilla. Recibirás correos electrónicos periódicos con información relevante sobre nuestros productos y servicios."
              id="checkbox-form-1"
              label="Suscribirse a boletines informativos"
              margin="b-24"
              name="email"
            />

            <Checkbox
              description="Al marcar esta casilla, nos das permiso para analizar tus compras anteriores y preferencias de navegación. De esta forma, podremos ofrecerte sugerencias de productos y servicios que se adapten a tus gustos y necesidades."
              disabled
              id="checkbox-form-2"
              label="Recibe recomendaciones personalizadas"
              name="recommendations"
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