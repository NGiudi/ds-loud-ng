import React from "react";

import { Form, Formik } from "formik";

import { Button, Flex, Select, SelectOption, ThemeDS } from "../../../";

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
          <Select label="Seleccione un elemento" margin="t-20">
            <SelectOption value="audi">Audi</SelectOption>
            <SelectOption value="lexus">Lexus</SelectOption>
            <SelectOption value="volvo">Volvo</SelectOption>
          </Select>

          <Flex hAlign="end">
            <Button margin="t-8" type="submit">
              Enviar Formulario
            </Button>
          </Flex>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export default story;
