import React from "react";

import { Form, Formik } from "formik";

import {
  Button,
  Flex,
  Image,
  Select,
  SelectOption,
  Text,
  ThemeDS,
} from "../../../";

const story = {
  title: "Components/Select",
  component: Select,
  argTypes: {
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
  
  },
};

export const DinamicExample = () => {
  const values = { marca: "", modelo: "" };

  return (
    <ThemeDS>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Select label="Seleccione un elemento" margin="t-20" name="marca">
            <SelectOption value="Audi">
              <Text>Audi</Text>
            </SelectOption>

            <SelectOption value="Lexus">
              <Text>Lexus</Text>
            </SelectOption>

            <SelectOption value="Volvo">
              <Text>Volvo</Text>
            </SelectOption>
          </Select>

          <Select disabled label="Seleccione un elemento" margin="t-20" name="modelo">
            <SelectOption value="Audi">
              <Text>S3</Text>
            </SelectOption>

            <SelectOption value="Lexus">
              <Text>Gol</Text>
            </SelectOption>

            <SelectOption value="Volvo">
              <Text>Fox</Text>
            </SelectOption>
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

export const ComplexSelect = () => {
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
          <Select label="Seleccione un elemento" margin="t-20" name="marca">
            <SelectOption value="Opcion 1">
              <Flex>
                <Image margin="r-8" size="avatar" type="round" />

                <div>
                  <Text size="lg" weight="semibold">
                    Title
                  </Text>

                  <Text size="sm">Description</Text>
                </div>
              </Flex>
            </SelectOption>

            <SelectOption value="Opcion 2">
              <Flex>
                <Image margin="r-8" size="avatar" type="round" />

                <div>
                  <Text size="lg" weight="semibold">
                    Title
                  </Text>

                  <Text size="sm">Description</Text>
                </div>
              </Flex>
            </SelectOption>

            <SelectOption value="Opcion 3">
              <Flex>
                <Image margin="r-8" size="avatar" type="round" />

                <div>
                  <Text size="lg" weight="semibold">
                    Title
                  </Text>

                  <Text size="sm">Description</Text>
                </div>
              </Flex>
            </SelectOption>
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
