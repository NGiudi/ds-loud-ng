import React, { useState } from "react";

import { Form, Formik } from "formik";

import { Button, Flex, Image, Select, Text, ThemeDS } from "../../../";

import { carBrands } from "../../../constants/cars/brands";
import { carModels } from "../../../constants/cars/models";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Indica si el select está deshabilitado.",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Indica si el select está en estado de carga.",
    },
    label: {
      control: { type: "text" },
      description: "Texto de descripción en la parte superior del select.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    maxHeight: {
      control: { type: "text" },
      description: "Setea el alto máximo en pixeles del panel.",
    },
    name: {
      control: { type: "text" },
      description: "Se usa para completar los campos del formulario de formik.",
    },
    onSearchInputChange: {
      control: { type: "function" },
      description: "Función que se ejecuta al cambiar el texto de búsqueda.",
    },
    options: {
      control: { type: "none" },
      description: "Listado de opciones del select.",
    },
  },
  component: Select,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Components/Select",
};

export const DinamicExample = (args) => {
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
          <Select {...args}/>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

DinamicExample.args = {
  disabled: false,
  isLoading: false,
  label: "Seleccione un elemento",
  margin: "t-20",
  maxHeight: "200px",
  name: "marca",
  options: carBrands,
};

export const AllSelectVariants = () => {
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

export const ComplexSelectOption = () => {
  const values = { marca: "" };

  const options = [
    {
      children: (
        <Flex>
          <Image margin="r-8" size="avatar" type="round" />

          <div>
            <Text type="bodySemibold">Title</Text>

            <Text>Description</Text>
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
            <Text type="bodySemibold">Title</Text>

            <Text>Description</Text>
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
            <Text type="bodySemibold">Title</Text>

            <Text>Description</Text>
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

export const SearcheableSelect = () => {
  const [options, setOptions] = useState(carBrands);

  const handleSearchInputChange = (value) => {
    const filteredOptions = carBrands.filter((carBrand) => {
      return carBrand.value.toLowerCase().includes(value.toLowerCase());
    });

    setOptions(filteredOptions);
  };

  return (
    <ThemeDS>
      <Formik
        initialValues={{ marca: "volvo", marca_2: "mclaren" }}
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
            onSearchInputChange={handleSearchInputChange}
            options={options}
          />

          <Select
            label="Seleccione un elemento"
            margin="t-20"
            maxHeight="200px"
            name="marca_2"
            options={carBrands}
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

export default meta;