import React from "react";

import { Form, Formik } from "formik";

import { Box, TextArea, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    description: {
      description:
        "Proporciona una descripción adicional o información sobre el propósito o la funcionalidad del componente.",
    },
    disabled: {
      description: "Especifica si el componente está deshabilitado.",
    },
    id: {
      description: "Identificador único asignado al componente.",
    },
    label: {
      description:
        "Texto que explica el propósito o la funcionalidad del componente.",
    },
    margin: {
      description: "Define el espacio de los márgenes alrededor del componente.",
    },
    name: {
      description:
        "Nombre del componente utilizado para la manipulación de datos o su referencia.",
    },
    rows: {
      description:
        "Cantidad de filas visibles en un campo de entrada de texto multilínea.",
    },
  },
  component: TextArea,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/TextArea",
};

export const Model = () => {
  const values = {
    description: "",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Formik initialValues={values} onSubmit={handleSubmit}>
          <Form>
            <TextArea label="TextArea label" name="description" />
          </Form>
        </Formik>
      </Box>
    </ThemeDS>
  );
};

export default meta;