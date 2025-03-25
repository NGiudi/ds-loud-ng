import React from "react";

import { Button, Dropzone, Flex, ThemeDS } from "../../../";
import { Formik, Form } from "formik";

const meta = {
  argTypes: {}, //TODO completar este campo.
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