import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Bar } from "./components/Bar";

import { Styles } from "./ProgressBar.styles";

export const ProgressBar = (props) => {
  let { margin, size, steps } = props;

  const stepsRef = useRef(steps);

  //? value out of range.
  useEffect(() => {
    if (stepsRef.current > 100) {
      stepsRef.current = 100;
    } else if (stepsRef.current < 0) {
      stepsRef.current = 0;
    }
  }, [stepsRef]);

  return (
    <Styles.ProgressBarWrapper $margin={margin} size={size}>
      <Bar
        noShowAnimationOnFirstLoad={props.noShowAnimationOnFirstLoad}
        onFinish={props.onFinish}
        size={props.size}
        step={props.step}
        stepTime={props.stepTime}
        steps={stepsRef.current}
      />
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
