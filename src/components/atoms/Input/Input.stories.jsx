import React from "react";

import { Form, Formik } from "formik";

import { Button, Input, Panel, ThemeDS } from "../../../";

const story = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del ícono de fontawesome.",
    },
    label: {
      control: { type: "text" },
      description: "",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      control: { type: "text" },
      description: "Se usa para completar los campos del formulario de formik.",
    },
    type: {
      control: { type: "select" },
      description: "Recibe el tipo de input que se usa.",
      options: ["number", "password", "text"],
    },
  },
};

export const DinamicExample = (args) => {
  const values = { dinamic_example: "" };

  return (
    <ThemeDS>
      <Formik initialValues={values}>
        <Form>
          <Input name="dinamic_example" {...args} />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export const ErrorExample = () => {
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
      <Formik
        initialValues={values}
        onSubmit={handleSubmit}
        validate={handleValidate}
      >
        <Form>
          <Input name="error_example" />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export const Options = () => {
  const values = { options_example: "" };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeDS>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Form>
          <Input icon="search" label="Input with icon" name="options_example" />
        </Form>
      </Formik>
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
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Form>
          <Input label="Text input" margin="b-20" name="text_type" />
          <Input label="Password input" name="password_type" type="password" />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export const FormExample = () => {
  return (
    <ThemeDS>
      <Panel padding="a-20">
        <Formik
          initialValues={{
            fullName: "Nicolás Giudice",
            password: "password1234",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Input label="Nombre completo" margin="b-20" name="fullName" />

            <Input
              label="Contraseña"
              margin="b-20"
              name="password"
              type="password"
            />

            <Button fullWidth onClick={() => {}} type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Panel>
    </ThemeDS>
  );
};

export default story;
