import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Button, Panel } from "../../../";

/* import styles */
import { Styles } from "./Modal.styles";

export const Modal = (props) => {
  const { onClose, padding, show } = props;

  if (!show) return null;

  return (
    <Styles.Overlay>
      <Styles.PanelWrapper width={props.width}>
        <Panel padding={padding}>
          <Styles.CloseBtnWrapper>
            <Button icon={{ name: "times" }} kind="icon" onClick={onClose} />
          </Styles.CloseBtnWrapper>

          {props.children}

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
