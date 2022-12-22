import React from "react";
import PropTypes from "prop-types";

/* import styles */
import { Styles } from "./Text.styles";

/* import utils */
import {
  getLabelOptionsFilter,
  getTextOptionsFilter,
} from "./utils/propsFilter";

export const Text = (props) => {
  const { as } = props;

  const textOptions = getTextOptionsFilter(props);

  const getTextType = () => {
    switch (as) {
      case "label":
        const labelOptions = getLabelOptionsFilter(props);
        return <Styles.LabelWrapper {...textOptions} {...labelOptions} />;
      case "p":
        return <Styles.TextWrapper {...textOptions} />;
      default:
        return <Styles.TextWrapper {...textOptions} />;
    }
  };

  return getTextType();
};

Text.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  as: PropTypes.oneOf(["label", "p"]),
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["underline", "line-through"]),
  htmlFor: PropTypes.string, //? used only for label type.
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["text", "title"]),
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"]),
};

Text.defaultProps = {
  align: "start",
  as: "p",
  color: "black",
  decoration: null,
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  size: "md",
  type: "text",
  weight: "regular",
};
