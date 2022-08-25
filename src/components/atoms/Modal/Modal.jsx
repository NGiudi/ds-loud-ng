import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Button, Panel } from "../../../";

/* import styles */
import {
  ButtonsWrapper,
  CloseBtnWrapper,
  Overlay,
  PanelWrapper,
} from "./Modal.styles";

export const Modal = (props) => {
  const { onClose, padding, show } = props;

  if (!show) return null;

  return (
    <Overlay>
      <PanelWrapper width={props.width}>
        <Panel padding={padding}>
          <CloseBtnWrapper>
            <Button icon={{ name: "times" }} kind="icon" onClick={onClose} />
          </CloseBtnWrapper>

          {props.children}

          <ButtonsWrapper>
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
          </ButtonsWrapper>
        </Panel>
      </PanelWrapper>
    </Overlay>
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
  padding: PropTypes.string,
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
  padding: "a-20",
  show: false,
  width: "auto",
};
