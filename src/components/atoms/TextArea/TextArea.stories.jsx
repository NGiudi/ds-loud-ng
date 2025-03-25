import React from "react";

import { Form, Formik } from "formik";

import { Button, Flex, TextArea, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    description: {
      description:
        "Una descripción adicional o información sobre el propósito o la función del componente.",
    },
    disabled: {
      description: "Indica si el componente está deshabilitado o no.",
    },
    id: {
      description: "Identificador único del componente.",
    },
    label: {
      description:
        "Texto que describe el propósito o la función del componente.",
    },
    margin: {
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      description:
        "Nombre del componente utilizado en la manipulación de datos o en la referencia a este.",
    },
    rows: {
      description:
        "Número de filas visibles en un componente de entrada de texto multilínea.",
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

export const DinamicExample = () => {
  const values = {
    description: "",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeDS>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Form>
          <TextArea label="TextArea label" name="description" />

          <Flex hAlign="end" margin="t-16">
            <Button type="submit">Guardar</Button>
          </Flex>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export default meta;