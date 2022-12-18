import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/* import components */
import Bar from "./components/Bar";

/* import styles. */
import Styles from "./ProgressBar.styles";

/* import utils */
import {
  getBarOptionsFilter,
  getProgressBarOptionsFilter,
} from "./utils/propsFilters";

export const ProgressBar = (props) => {
  let { steps } = props;

  const stepsRef = useRef(steps);

  const progressBarOptions = getProgressBarOptionsFilter(props);
  const barOptions = getBarOptionsFilter(props);

  /* value out of range */
  useEffect(() => {
    if (stepsRef.current > 100) {
      stepsRef.current = 100;
    } else if (stepsRef.current < 0) {
      stepsRef.current = 0;
    }
  }, [stepsRef]);

  return (
    <Styles.ProgressBarWrapper {...progressBarOptions}>
      <Bar {...barOptions} steps={stepsRef.current} />
    </Styles.ProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  borderRound: PropTypes.bool,
  margin: PropTypes.string,
  noShowAnimationOnFirstLoad: PropTypes.bool,
  onFinish: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  step: PropTypes.number,
  stepTime: PropTypes.number,
  steps: PropTypes.number,
};

ProgressBar.defaultProps = {
  borderRound: false,
  margin: "a-0",
  noShowAnimationOnFirstLoad: false,
  onFinish: null,
  size: "md",
  step: 0,
  stepTime: 10,
  steps: 100,
};
