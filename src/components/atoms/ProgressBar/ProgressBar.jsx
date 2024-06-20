import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Bar } from "./components/Bar";

import { Styles } from "./ProgressBar.styles";

const defaultProps = {
  borderRound: false,
  margin: "a-0",
  noShowAnimationOnFirstLoad: false,
  onFinish: () => {},
  size: "md",
  step: 0,
  stepTime: 10,
  steps: 100,
};

export const ProgressBar = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const stepsRef = useRef(attrs.steps);

  //? value out of range.
  useEffect(() => {
    if (stepsRef.current > 100) {
      stepsRef.current = 100;
    } else if (stepsRef.current < 0) {
      stepsRef.current = 0;
    }
  }, [stepsRef]);

  return (
    <Styles.ProgressBarWrapper $margin={attrs.margin} size={attrs.size}>
      <Bar
        noShowAnimationOnFirstLoad={attrs.noShowAnimationOnFirstLoad}
        onFinish={attrs.onFinish}
        size={attrs.size}
        step={attrs.step}
        stepTime={attrs.stepTime}
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
