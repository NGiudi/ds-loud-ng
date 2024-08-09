import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Bar } from "./components/Bar";

import { Styles } from "./ProgressBar.styles";

const DEFAULT_PROPS = {
  borderRound: false,
  margin: "a-0",
  noShowAnimationOnFirstLoad: false,
  onFinish: () => {},
  step: 0,
  stepTime: 10,
  steps: 100,
};

export const ProgressBar = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
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
    <Styles.ProgressBarWrapper
      $borderRound={attrs.borderRound}
      $margin={attrs.margin}
    >
      <Bar
        noShowAnimationOnFirstLoad={attrs.noShowAnimationOnFirstLoad}
        onFinish={attrs.onFinish}
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
  step: PropTypes.number,
  stepTime: PropTypes.number,
  steps: PropTypes.number,
};
