import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useKeyboardActions } from "../../../hooks/useKeyboardActions";

import { Button, IconButton, Panel } from "../../../";

import { Styles } from "./Modal.styles";

const DEFAULT_PROPS = {
  cancelButton: {
    hide: false,
    onClick: () => {},
    text: "Cancelar",
  },
  children: null,
  confirmButton: {
    hide: false,
    onClick: () => {},
    text: "Continuar",
  },
  onClose: () => {},
  show: false,
  width: "auto",
};

export const Modal = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
    cancelButton: {
      ...DEFAULT_PROPS.cancelButton,
      ...props.cancelButton,
    },
    confirmButton: {
      ...DEFAULT_PROPS.confirmButton,
      ...props.confirmButton,
    },
  };

  const [showModal, setShowModal] = useState(false);
  const showModalRef = useRef(false);

  const handleCancel = () => {
    if (showModalRef.current) {
      attrs.cancelButton.onClick();
      attrs.onClose();
      setShowModal(false);
    }
  };

  const handleClose = () => {
    if (showModalRef.current) {
      attrs.onClose();
      setShowModal(false);
    }
  };

  const handleConfirm = () => {
    if (showModalRef.current) {
      attrs.confirmButton.onClick();
      attrs.onClose();
      setShowModal(false);
    }
  };

  useKeyboardActions({
    onClose: handleClose,
    onConfirm: handleConfirm,
  });

  //? When the show is modified through the props, the internal state is updated.
  useEffect(() => {
    setShowModal(attrs.show);
  }, [attrs.show]);

  //? Reference for using with the useKeyboardActions hook to keep the state updated.
  useEffect(() => {
    showModalRef.current = showModal;
  }, [showModal]);

  if (showModal) {
    return (
      <Styles.Overlay>
        <Styles.PanelWrapper width={attrs.width}>
          <Panel padding="a-20">
            <Styles.CloseBtnWrapper>
              <IconButton icon={{ icon: "times" }} onClick={handleClose} />
            </Styles.CloseBtnWrapper>

            <Styles.ContentBox $padding="r-28">
              {attrs.children}
            </Styles.ContentBox>

            <Styles.ButtonsWrapper>
              {!attrs.cancelButton.hide && (
                <Button kind="outlined" onClick={handleCancel}>
                  {attrs.cancelButton.text}
                </Button>
              )}

              {!attrs.confirmButton.hide && (
                <Button margin="l-8" onClick={handleConfirm}>
                  {attrs.confirmButton.text}
                </Button>
              )}
            </Styles.ButtonsWrapper>
          </Panel>
        </Styles.PanelWrapper>
      </Styles.Overlay>
    );
  }

  return null;
};

//TODO: usar las propTypes de los botones.
Modal.propTypes = {
  cancelButton: PropTypes.shape({
    hide: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
  confirmButton: PropTypes.shape({
    hide: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
  }),
  onClose: PropTypes.func,
  show: PropTypes.bool,
  width: PropTypes.string,
};