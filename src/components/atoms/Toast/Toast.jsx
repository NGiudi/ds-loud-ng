import PropTypes from "prop-types";

import toast from "react-hot-toast";

const DEFAULT_PROPS = {
  children: "",
  type: "success",
};

export const Toast = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  switch (attrs.type) {
    case "error":
      toast.error(attrs.children);
      break;
    case "success":
    default:
      toast.success(attrs.children);
      break;
  }

  return null;
};

Toast.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(["error", "success"]),
};