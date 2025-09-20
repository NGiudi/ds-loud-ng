import React from "react";

import { Form, Formik } from "formik";

import { Box, Input, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    autoComplete: {
      control: { type: "text" },
      description: "Corresponde al atributo 'autocomplete' de HTML, que sugiere valores basados en entradas anteriores.",
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "Corresponde al atributo 'autofocus' de HTML, que enfoca automáticamente el campo al cargar la página.",
    },
    description: {
      control: { type: "text" },
      description: "Texto descriptivo que se muestra debajo de la etiqueta (label) del input.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el input si este valor es 'true'.",
    },
    icon: {
      control: { type: "text" },
      description: "Especifica el nombre del ícono de FontAwesome que se mostrará dentro del input.",
    },
    innerRef: {
      control: { type: "function" },
      description: "Permite pasar una referencia al elemento input.",
    },
    label: {
      control: { type: "text" },
      description: "Texto que describe o identifica el propósito del input.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del input.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre del campo, utilizado para enlazar con Formik y manejar los valores del formulario.",
    },
    onKeyPress: {
      control: { type: "none" },
      description: "Función que se ejecuta al presionar una tecla mientras el input está enfocado.",
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto que se muestra como sugerencia dentro del input cuando está vacío.",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "Corresponde al atributo 'readonly' de HTML, que hace que el input sea de solo lectura.",
    },
    reference: {
      control: { type: "none" },
      description: "Similar a 'innerRef', pero hace referencia al contenedor padre del input.",
    },
    type: {
      control: { type: "select" },
      description: "Especifica el tipo de input que se utilizará (por ejemplo, texto, contraseña o número).",
      options: ["number", "password", "text"],
    },
  },
  component: Input,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Input",
};

export const Model = (args) => {
  const values = { dinamic_example: "" };

  return (
    <ThemeDS>
      <Formik initialValues={values}>
        <Form>
          <Box padding="b-40 t-20 x-20">
            <Input name="dinamic_example" {...args} />
          </Box>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

Model.args = {
  autoComplete: "off",
  autoFocus: false,
  description: "Esta es la descripción del input",
  disabled: false,
  icon: "search",
  id: "input_id",
  innerRef: null,
  label: "Test input",
  margin: "a-0",
  name: "dinamic_example",
  onKeyPress: () => {},
  placeholder: "Placeholder",
  readOnly: false,
  reference: null,
  type: "text",
};

export const Error = () => {
  const values = { error_example: "" };

  const handleValidate = (values) => {
    const errors = {};

    if (values.error_example === "") {
      errors.error_example = "Campo Requerido";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          validate={handleValidate}
          >
          <Form>
            <Input name="error_example" />
          </Form>
        </Formik>
      </Box>
    </ThemeDS>
  );
};

export const Types = () => {
  const values = {
    password_type: "",
    text_type: "",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Formik initialValues={values} onSubmit={handleSubmit}>
          <Form>
            <Input label="Text input" margin="b-8" name="text_type" />
            <Input label="Password input" name="password_type" type="password" />
          </Form>
        </Formik>
      </Box>
    </ThemeDS>
  );
};

export default meta;