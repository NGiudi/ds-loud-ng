import React from "react";

import { Button, Dropzone, Flex, ThemeDS } from "../../../";
import { Formik, Form } from "formik";

const meta = {
  argTypes: {
    accept: {
      control: { type: "array" },
      description: "Array de tipos de archivo aceptados (por ejemplo, ['image', 'pdf']).",
    },
    margin: {
      control: { type: "text" },
      description: "Espaciado de margen para el componente Dropzone.",
    },
    maxCount: {
      control: { type: "number" },
      description: "Número máximo de archivos que se pueden subir.",
    },
    maxSize: {
      control: { type: "number" },
      description: "Tamaño máximo de archivo en bytes.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre del campo en el formulario.",
    },
  },
  component: Dropzone,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Molecules/Dropzone",
};

export const Example = () => {
  return (
    <ThemeDS>
      <Formik
        initialValues={{ files: [] }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Dropzone
            accept={["image"]}
            margin="a-20"
            maxSize={20971520}
            maxCount={3}
            name="files"
          />

          <Flex margin="x-20" hAlign="end">
            <Button margin="b-32" type="submit">
              Guardar
            </Button>
          </Flex>
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export default meta;