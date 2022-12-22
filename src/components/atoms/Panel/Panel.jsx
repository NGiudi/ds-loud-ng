import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon } from "../../../";

/* import styles. */
import { Styles } from "./Panel.styles";

/* import utils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

/* TODO: agregar al theme */
import icons from "../../../themes/icons";

export const Panel = (props) => {
  const { align, onSizeH } = props;

  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  const wrapperOptions = getWrapperOptionsFilter(props);

  //? gets the height of the panel on the left.
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  //? run when the height of the panel changes.
  useEffect(() => {
    onSizeH && onSizeH(height);
  }, [height]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styles.PanelWrapper ref={ref} {...wrapperOptions}>
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
