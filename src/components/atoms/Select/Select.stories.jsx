import React, { useState } from "react";

import { Form, Formik } from "formik";

import { Box, Button, Flex, Image, Select, Text, ThemeDS } from "../../../";

import { carBrands } from "../../../constants/cars/brands";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Indica si el select está deshabilitado, evitando la interacción del usuario.",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Muestra un estado de carga en el select mientras se obtienen los datos.",
    },
    label: {
      control: { type: "text" },
      description: "Texto que aparece como etiqueta descriptiva en la parte superior del select.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes externos del componente para ajustar su posición.",
    },
    maxHeight: {
      control: { type: "text" },
      description: "Establece la altura máxima en píxeles del panel desplegable.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre del campo utilizado para enlazar con los valores del formulario de Formik.",
    },
    onSearchInputChange: {
      control: { type: "function" },
      description: "Función que se ejecuta al modificar el texto en el campo de búsqueda.",
    },
    options: {
      control: { type: "none" },
      description: "Lista de opciones disponibles para seleccionar en el componente.",
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

export const Model = (args) => {
  const values = { marca: "volvo" };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
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
      </Box>
    </ThemeDS>
  );
};

Model.args = {
  disabled: false,
  isLoading: false,
  label: "Seleccione un elemento",
  margin: "a-0",
  maxHeight: "200px",
  name: "marca",
  options: carBrands,
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
      <Box padding="b-40 t-20 x-20">
        <Formik
          initialValues={values}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          >
          <Form>
            <Select
              label="Seleccione un elemento"
              name="marca"
              options={options}
              />

            <Flex hAlign="end">
              <Button margin="t-24" type="submit">
                Enviar Formulario
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Box>
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
      <Box padding="b-40 t-20 x-20">
        <Formik
          initialValues={{ marca: "volvo" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Select
              label="Seleccione un elemento"
              maxHeight="200px"
              name="marca"
              onSearchInputChange={handleSearchInputChange}
              options={options}
              />

            <Flex hAlign="end">
              <Button margin="t-24" type="submit">
                Enviar Formulario
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Box>
    </ThemeDS>
  );
};

export default meta;