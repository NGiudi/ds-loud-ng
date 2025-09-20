import React, { useState } from "react";

import { Box, Button, Modal, Text, ThemeDS } from "../../../";

const meta = {
  argTypes: {
    cancelButton: {
      control: { type: "text" },
      description: "Propiedades que se aplican al botón de cancelar.",
    },
    children: {
      control: { type: "none" },
      description: "Contenido que se muestra dentro del modal.",
    },
    confirmButton: {
      control: { type: "text" },
      description: "Propiedades que se aplican al botón de confirmar.",
    },
    onClose: {
      control: { type: "none" },
      description:
        "Función que se ejecuta al hacer clic en cancelar o en el botón para cerrar el modal.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno (padding) del modal.",
    },
    show: {
      control: { type: "boolean" },
      description:
        "Controla la visibilidad del modal. Si es true, el modal se muestra.",
    },
    width: {
      control: { type: "text" },
      description:
        "Permite definir el ancho del modal. Si la pantalla es más pequeña que el ancho definido, el modal se ajustará automáticamente.",
    },
  },
  component: Modal,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Modal",
};

export const ConfirmationModel = (args) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Button onClick={handleShowModal}>Mostrar Modal</Button>
      
        <Modal {...args} onClose={handleShowModal} show={showModal}>
          <Text margin="b-20" type="title">
            ¿Quieres activar la cuenta X?
          </Text>

          <Text margin="b-32">
            Para activar una cuenta, debe tener completa la información fiscal.
          </Text>
        </Modal>
      </Box>
      
    </ThemeDS>
  );
};

ConfirmationModel.args = {
  cancelButton: {
    onClick: () => {},
    text: "No, cancelar",
  },
  confirmButton: {
    onClick: () => {},
    text: "Sí, avanzar",
  },
  onClose: null,
  show: false,
  width: "600px"
};

export const EmailExample = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ThemeDS>
      <Box padding="b-40 t-20 x-20">
        <Button onClick={handleShowModal}>Mostrar Modal</Button>

        <Modal
          cancelButton={{ hide: true, text: "No, cancelar" }}
          confirmButton={{ text: "Entendido" }}
          onClose={handleShowModal}
          show={showModal}
          width="540px"
          >
          <Text margin="b-20" type="title">
            Confirma tu email para avanzar
          </Text>

          <Text margin="b-32">
            Verifica tu cuenta desde el email que te enviamos. No olvides revisar
            “Correo no deseado” y “Spam”.
          </Text>
        </Modal>
      </Box>
    </ThemeDS>
  );
};

export default meta;