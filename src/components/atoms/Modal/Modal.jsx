import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useKeyboardActions } from "../../../hooks/useKeyboardActions";

import { Button, IconButton, Panel } from "../../../";

import { Styles } from "./Modal.styles";

export const Modal = (props) => {
  const { cancelButton, confirmButton, onClose, show } = props;

  const [showModal, setShowModal] = useState(false);
  const showModalRef = useRef(false);

  const handleCancel = () => {
    if (showModalRef.current) { 
      cancelButton.onClick();
      onClose();
      setShowModal(false);
    }
  };

  const handleClose = () => {
    if (showModalRef.current) {
      onClose();
      setShowModal(false);
    }
  }

  const handleConfirm = () => {
    if (showModalRef.current) {
      confirmButton.onClick();    
      onClose();
      setShowModal(false);
    }
  }

  useKeyboardActions({
    onClose: handleClose,
    onConfirm: handleConfirm,
  });

  //? When the show is modified through the props, the internal state is updated.
  useEffect(() => {
    setShowModal(show);
  }, [show]);
  
  //? Reference for using with the useKeyboardActions hook to keep the state updated.
  useEffect(() => {
    showModalRef.current = showModal;
  }, [showModal]);

  if (showModal) {
    return (
      <Styles.Overlay>
        <Styles.PanelWrapper width={props.width}>
          <Panel padding="a-20">
            <Styles.CloseBtnWrapper>
              <IconButton icon={{ name: "times" }} onClick={handleClose} />
            </Styles.CloseBtnWrapper>
  
            <Styles.ContentBox $padding="r-28">
              {props.children}
            </Styles.ContentBox>
  
            <Styles.ButtonsWrapper>
              {!props.cancelButton.hide && (
                <Button kind="outlined" onClick={handleCancel}>
                  {props.cancelButton.text}
                </Button>
              )}
  
              {!props.confirmButton.hide && (
                <Button margin="l-8" onClick={handleConfirm}>
                  {props.confirmButton.text}
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

Modal.defaultProps = {
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
