import { useEffect } from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
};

export const useKeyboardActions = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Enter":
        if (typeof attrs.onConfirm === "function") {
          attrs.onConfirm();
        }
        break;
      case "Escape":
        if (typeof attrs.onClose === "function") {  
          attrs.onClose();
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
