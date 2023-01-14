import React, { useRef } from "react";

import { Form, Formik } from "formik";

import { Input, Text, ThemeDS } from "../../";

const story = { title: "Test/Form" };

export const FormStory = () => {
  const lastnameInputRef = useRef();
  const nicknameInputRef = useRef();
  const nameInputRef = useRef();

  const handleEnterClick = (e) => {
    const { name } = e.target;

    if (e.code === "Enter") {
      switch (name) {
        case "name":
          lastnameInputRef.current.focus();
          break;
        case "lastname":
          nicknameInputRef.current.focus();
          break;
        case "nickname":
          nameInputRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <ThemeDS>
      <Text margin="b-12 t-20" type="title">
        Ejemplo de Formulario
      </Text>

      <Text>
        Este es un ejemplo de formulario que cambia automáticamente el foco al
        siguiente input cuando se apreta el enter.
      </Text>

      <Formik
        initialValues={{
          name: "",
          lastname: "",
          nickname: "",
        }}
      >
        <Form>
          <Input
            innerRef={nameInputRef}
            name="name"
            onKeyPress={handleEnterClick}
          />

          <Input
            innerRef={lastnameInputRef}
            name="lastname"
            onKeyPress={handleEnterClick}
          />

          <Input
            innerRef={nicknameInputRef}
            name="nickname"
            onKeyPress={handleEnterClick}
          />
        </Form>
      </Formik>
    </ThemeDS>
  );
};

export default story;
