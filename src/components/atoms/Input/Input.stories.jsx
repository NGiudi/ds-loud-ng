import React from "react";

import { Form, Formik } from "formik";

import { Button, Input, Panel, ThemeDS } from "../../../";

const story = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    autoComplete: {
      control: { type: "string" },
      description: "Es igual al atributo autocomplete de html.",
    },
    autoFocus: {
      control: { type: "string" },
      description: "Es igual al atributo autofocus de html.",
    },
    description: {
      control: { type: "string" },
      description: "Texte descriptivo que va por debajo del label",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Deshabilita el input si este valor es true.",
    },
    icon: {
      control: { type: "string" },
      description: "Recibe el nombre del ícono de fontawesome.",
    },
    innerRef: {
      control: { type: "string" },
      description: "Se puede pasar una variable para que haga referencia al iput.",
    },
    label: {
      control: { type: "string" },
      description: "Texto que identifica sobre que se trata el input.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      control: { type: "string" },
      description: "Se usa para completar los campos del formulario de formik.",
    },
    onKeyPress: {
      control: { type: "none" },
      description: "Función que se ejecuta al hacer click en una tecla",
    },
    placeholder: {
      control: { type: "string" },
      description: "Es texto que va en el placeholder de html.",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "Es igual que el atributo readonly de html.",
    },
    reference: {
      control: { type: "none" },
      description: "Es similar al innerRef pero se hace referencia al contenedor padre del input.",
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
          <Input
            description="Esta es la descripción del input"
            icon="search"
            label="Input with icon"
            name="options_example"
          />
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
