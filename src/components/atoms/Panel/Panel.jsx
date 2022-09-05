import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon } from "../../../";

/* import styles. */
import Styles from "./Panel.styles";

/* import utils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

/* import theme */
import icons from "../../../themes/icons";

export const Panel = (props) => {
  const { align } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <Styles.PanelWrapper {...wrapperOptions}>
      <Styles.PositionWrapper align={align}>
        {props.type !== "neutral" && (
          <Icon icon={icons.fontawesome[props.type]} margin="r-16" />
        )}

        <Styles.ContentWrapper margin="t-4">
          {props.children}
        </Styles.ContentWrapper>
      </Styles.PositionWrapper>
    </Styles.PanelWrapper>
  );
};

Panel.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.oneOf(["error", "info", "neutral", "success", "warning"]),
};

Panel.defaultProps = {
  align: "start",
  children: null,
  margin: "a-0",
  padding: "a-8",
  type: "neutral",
};
