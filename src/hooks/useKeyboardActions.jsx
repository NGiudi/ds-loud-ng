import { useEffect } from "react";
import { PropTypes } from "prop-types";

export const useKeyboardActions = (props) => {
  const { onClose, onConfirm } = props;

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Enter":
        if (typeof onConfirm === "function") {
          onConfirm();
        }
        break;
      case "Escape":
        if (typeof onClose === "function") {  
          onClose();
        }
        break;
    }
  };
  
  useEffect(() => {    
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

useKeyboardActions.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

useKeyboardActions.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
};