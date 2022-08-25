import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Button, Countdown, Modal, Text, ThemeDS } from "../..";

const EmailValidationModal = (props) => {
  return (
    <ThemeDS>
      <Button onClick={props.handleOpneModal}>Abrir modal</Button>

      <Modal
        cancelButton={{ hide: true }}
        show={!props.isValidEmail && props.showModal}
        onClose={props.handleCloseModal}
        width="650px"
      >
        <Text margin="b-20" type="title" weight="bold">
          Tu email necesita verificación
        </Text>

        <Text margin="b-16">
          Te enviamos un correo para que lo verifiques y puedas continuar.
        </Text>

        <Text margin="b-12" size="lg">
          ¿No lo recibiste, ni siquiera en spam?
        </Text>

        {props.canResendEmail ? (
          <Button onClick={props.handleResendEmail} size="md">
            Reenviar correo
          </Button>
        ) : (
          /* TODO: usar link (cuando este creado) */
          <Text>
            Reenviar correo en{" "}
            <Countdown
              endTime={Date.now() + props.time}
              formatTime="mm:ss"
              onFinish={props.onFinishCounter}
            />
          </Text>
        )}
      </Modal>
    </ThemeDS>
  );
};

EmailValidationModal.propTypes = {
  canResendEmail: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  handleOpneModal: PropTypes.func,
  handleResendEmail: PropTypes.func,
  isValidEmail: PropTypes.bool,
  onFinishCounter: PropTypes.func,
  showModal: PropTypes.bool,
  time: PropTypes.number,
};

EmailValidationModal.defaultProps = {
  canResendEmail: true,
  handleCloseModal: null,
  handleOpneModal: null,
  handleResendEmail: null,
  isValidEmail: false,
  onFinishCounter: null,
  showModal: false,
  time: 0,
};

export default EmailValidationModal;
