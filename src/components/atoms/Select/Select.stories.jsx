import React from "react";

import { Form, Formik } from "formik";

import { Button, Select, ThemeDS } from "../../../";

const story = {
  title: "Components/Select",
  component: Select,
  argTypes: {},
};

export const DinamicExample = () => {
  const values = { marca: "" };

  return (
    <ThemeDS>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Select name="marca">
            <option value="audi">Audi</option>
            <option value="lexus">Lexus</option>
            <option value="volvo">Volvo</option>
          </Select>

          <Button type="submit">Enviar Formulario</Button>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export default story;
