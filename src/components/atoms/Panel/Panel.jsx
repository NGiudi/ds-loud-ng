import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Styles } from "./Panel.styles";

const DEFAULT_PROPS = {
  align: "start",
  children: null,
  margin: "a-0",
  onSizeH: () => {},
  padding: "a-8",
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
      $align={attrs.align}
      $margin={attrs.margin}
      $padding={attrs.padding}
      ref={ref}
    >
      {attrs.children}
    </Styles.PanelWrapper>
  );
};

Panel.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  children: PropTypes.node,
  margin: PropTypes.string,
  onSizeH: PropTypes.func,
  padding: PropTypes.string,
};
