import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Button, IconButton, Panel } from "../../../";

/* import styles */
import { Styles } from "./Modal.styles";

export const Modal = (props) => {
  const { onClose, show } = props;

  if (!show) return null;

  return (
    <Styles.Overlay>
      <Styles.PanelWrapper width={props.width}>
        <Panel padding="a-20">
          <Styles.CloseBtnWrapper>
            <IconButton icon={{ name: "times" }} onClick={onClose} />
          </Styles.CloseBtnWrapper>

          <Styles.ContentBox $padding="r-28">
            {props.children}
          </Styles.ContentBox>

          <Styles.ButtonsWrapper>
            {!props.cancelButton.hide && (
              <Button kind="outlined" onClick={onClose}>
                {props.cancelButton.text}
              </Button>
            )}

            {!props.confirmButton.hide && (
              <Button margin="l-8" onClick={props.confirmButton.onClick}>
                {props.confirmButton.text}
              </Button>
            )}
          </Styles.ButtonsWrapper>
        </Panel>
      </Styles.PanelWrapper>
    </Styles.Overlay>
  );
};

Modal.propTypes = {
  cancelButton: PropTypes.shape({
    hide: PropTypes.bool,
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
    text: "Cancelar",
  },
  children: null,
  confirmButton: {
    hide: false,
    onClick: null,
    text: "Continuar",
  },
  onClose: null,
  show: false,
  width: "auto",
};
