import React from "react";
import PropTypes from "prop-types";

/* import styles. */
import Styles from "./Text.styles";

/* import utils */
import { getTextOptionsFilter } from "./utils/propsFilter";

export const Text = (props) => {
  const textOptions = getTextOptionsFilter(props);

  return <Styles.TextWrapper {...textOptions} />;
};

Text.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["text", "title"]),
  underline: PropTypes.bool,
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"]),
};

Text.defaultProps = {
  margin: "a-0",
  padding: "a-0",
  size: "md",
  type: "text",
  underline: false,
  weight: "regular",
};
