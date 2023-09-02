import React from "react";

import { Form, Formik } from "formik";

import { Button, Flex, Image, Select, Text, ThemeDS } from "../../../";

import { carBrands } from "../../../constants/cars/brands";
import { carModels } from "../../../constants/cars/models";

const story = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "string" },
      description: "Texto de descripción en la parte superior del select.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
    maxHeight: {
      control: { type: "string" },
      description: "Setea el alto máximo en pixeles del panel.",
    },
    name: {
      control: { type: "string" },
      description: "Se usa para completar los campos del formulario de formik.",
    },
    options: {
      control: { type: "none" },
      description: "Listado de opciones del select.",
    },
  },
};

export const DinamicExample = () => {
  const values = { marca: "volvo", modelo: "fox" };

  return (
    <ThemeDS>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Select
            label="Seleccione un elemento"
            margin="t-20"
            maxHeight="200px"
            name="marca"
            options={carBrands}
          />

          <Select
            disabled
            label="Seleccione un elemento"
            margin="t-20"
            name="modelo"
            options={carModels}
          />

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

export const ComplexSelect = () => {
  const values = { marca: "" };

  const options = [
    {
      children: (
        <Flex>
          <Image margin="r-8" size="avatar" type="round" />

          <div>
            <Text size="lg" weight="semibold">
              Title
            </Text>

            <Text size="sm">Description</Text>
          </div>
        </Flex>
      ),
      display: "Opcion 1",
      value: "option_1",
    },
    {
      children: (
        <Flex>
          <Image margin="r-8" size="avatar" type="round" />

          <div>
            <Text size="lg" weight="semibold">
              Title
            </Text>

            <Text size="sm">Description</Text>
          </div>
        </Flex>
      ),
      display: "Opcion 2",
      value: "option_2",
    },
    {
      children: (
        <Flex>
          <Image margin="r-8" size="avatar" type="round" />

          <div>
            <Text size="lg" weight="semibold">
              Title
            </Text>

            <Text size="sm">Description</Text>
          </div>
        </Flex>
      ),
      display: "Opcion 3",
      value: "option_3",
    },
  ];

  return (
    <ThemeDS>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Select
            label="Seleccione un elemento"
            margin="t-20"
            name="marca"
            options={options}
          />

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
