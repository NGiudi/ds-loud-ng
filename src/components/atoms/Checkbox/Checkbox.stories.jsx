import React from "react";

import { CheckboxDocs } from "./Checkbox.docs";

import { Box, Button, Checkbox, ThemeDS } from "../../../";

import { Form, Formik } from "formik";

const meta = {
  argTypes: {
    description: {
      control: { type: "text" },
      description:
        "Texto detallado que explica la funcionalidad del checkbox y proporciona información adicional relevante.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el checkbox, impidiendo la interacción del usuario.",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único del componente, utilizado para diferenciarlo de otros elementos.",
    },
    label: {
      control: { type: "text" },
      description: "Texto breve que describe la funcionalidad del checkbox de manera clara y concisa.",
      table: {
        defaultValue: { summary: "N/A" },
      },
    },
    margin: {
      control: { type: "text" },
      description: "Define el espacio exterior (márgenes) alrededor del componente.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre único del componente, útil para su integración con Formik u otros formularios.",
      table: {
        defaultValue: { summary: "N/A" },
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
      <Box padding="b-40 t-20 x-20">
        <Formik initialValues={{ email: false }}>
          <Form>
            <Checkbox {...args} />
          </Form>
        </Formik>
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  disabled: false,
  id: "story-checkbox",
  label: "Lorem ipsum",
  margin: "a-0",
  name: "email",
};

export const FormExample = () => {
  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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
      </Box>
    </ThemeDS>
  );
};

export default meta;