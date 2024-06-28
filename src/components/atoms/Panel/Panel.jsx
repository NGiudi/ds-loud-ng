import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../";

import { Styles } from "./Panel.styles";

/* TODO: agregar al theme */
import { icons } from "../../../themes/icons";

const DEFAULT_PROPS = {
  align: "start",
  children: null,
  margin: "a-0",
  onSizeH: (p) => {},
  padding: "a-8",
  type: "neutral",
};

export const Panel = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  //? gets the height of the panel on the left.
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  //? run when the height of the panel changes.
  useEffect(() => {
    attrs.onSizeH(height);
  }, [height]); // eslint-disable-line

  return (
    <Styles.PanelWrapper
      $margin={attrs.margin}
      $padding={attrs.padding}
      ref={ref}
      type={attrs.type}
    >
      <Styles.PositionWrapper $align={attrs.align}>
        {attrs.type !== "neutral" && (
          <Icon icon={icons.fontawesome[attrs.type]} margin="r-16" />
        )}

        <Styles.ContentWrapper $margin="t-4">
          {attrs.children}
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
