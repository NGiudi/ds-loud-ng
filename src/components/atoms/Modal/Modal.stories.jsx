import React, { useState } from "react";

import { Button, Modal, Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    cancelButton: {
      control: { type: "string" },
      description: "Props que se pasan al botón de cancelar.",
    },
    children: {
      control: { type: "none" },
      description: "Contenido del modal.",
    },
    confirmButton: {
      control: { type: "string" },
      description: "Props que se pasan al botón de cancelar.",
    },
    onClose: {
      control: { type: "none" },
      description:
        "Función que se ejecuta al apretar en cancelar o al apretar el botón para cerrar el modal.",
    },
    padding: {
      control: { type: "string" },
      description: "Se setea la distancia de los paddings.",
    },
    show: {
      control: { type: "boolean" },
      description:
        "Controla la visualización del modal. Si es true muestra el modal.",
    },
    width: {
      control: { type: "string" },
      description:
        "Se puede setear el ancho del modal. Caso la pantalla sea menor al valor seteado, el modal se adapta a la pantalla.",
    },
  },
};

export const ConfirmationExample = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ThemeDS>
      <Button onClick={handleShowModal}>Mostrar Modal</Button>

      <Modal
        cancelButton={{ text: "No, cancelar" }}
        confirmButton={{ text: "Sí, avanzar" }}
        onClose={handleShowModal}
        show={showModal}
        width="600px"
      >
        <Text margin="b-20" type="title" weight="bold">
          ¿Quieres activar la cuenta X?
        </Text>

        <Text margin="b-32">
          Para activar una cuenta, debe tener completa la información fiscal.
        </Text>
      </Modal>
    </ThemeDS>
  );
};

export const EmailExample = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ThemeDS>
      <Button onClick={handleShowModal}>Mostrar Modal</Button>

      <Modal
        cancelButton={{ hide: true, text: "No, cancelar" }}
        confirmButton={{ text: "Entendido" }}
        onClose={handleShowModal}
        show={showModal}
        width="540px"
      >
        <Text margin="b-20" type="title" weight="bold">
          Confirma tu email para avanzar
        </Text>

        <Text margin="b-32">
          Verifica tu cuenta desde el email que te enviamos. No olvides revisar
          “Correo no deseado” y “Spam”.
        </Text>
      </Modal>
    </ThemeDS>
  );
};

export default story;
