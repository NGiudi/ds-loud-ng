import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../";

import { Styles } from "./Panel.styles";

/* TODO: agregar al theme */
import { icons } from "../../../themes/icons";

export const Panel = (props) => {
  const { align, margin, padding, onSizeH, type } = props;

  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  //? gets the height of the panel on the left.
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  //? run when the height of the panel changes.
  useEffect(() => {
    onSizeH && onSizeH(height);
  }, [height]); // eslint-disable-line

  return (
    <Styles.PanelWrapper
      $margin={margin}
      $padding={padding}
      ref={ref}
      type={type}
    >
      <Styles.PositionWrapper $align={align}>
        {type !== "neutral" && (
          <Icon icon={icons.fontawesome[type]} margin="r-16" />
        )}

        <Styles.ContentWrapper $margin="t-4">
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
  onSizeH: PropTypes.func,
  padding: PropTypes.string,
  type: PropTypes.oneOf(["error", "info", "neutral", "success", "warning"]),
};

Panel.defaultProps = {
  align: "start",
  children: null,
  margin: "a-0",
  onSizeH: null,
  padding: "a-8",
  type: "neutral",
};
