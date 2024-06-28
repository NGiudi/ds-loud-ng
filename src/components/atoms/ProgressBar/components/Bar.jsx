import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { Styles } from "../ProgressBar.styles";

const DEFAULT_PROPS = {
  noShowAnimationOnFirstLoad: false,
  onFinish: () => {},
  size: "md",
  step: 0,
  stepTime: 10,
  steps: 0,
};


export const Bar = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,  
  };

  const [width, setWidth] = useState(0);

  const timer = useRef();

  const animationAddStep = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setWidth((previusWidth) => previusWidth + 1);
    }, attrs.stepTime);
  };

  const animationSubtractStep = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setWidth((previusWidth) => previusWidth - 1);
    }, attrs.stepTime);
  };

  //? clear timer when unmounted component.
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  //? animation controller.
  useEffect(() => {
    const finishWidth = Math.floor((attrs.step * 100) / attrs.steps);

    if (attrs.noShowAnimationOnFirstLoad) {
      setWidth(finishWidth);
    } else {
      if (finishWidth > width) {
        animationAddStep();
      } else if (finishWidth < width) {
        animationSubtractStep();
      }
    }

    if (attrs.onFinish && finishWidth === width) {
      attrs.onFinish();
    }
  }, [attrs.step, attrs.steps, width]); // eslint-disable-line

  const porcentString = () => {
    let porcent = width;

    if (porcent <= 0) porcent = 0;
    if (porcent > 100) porcent = 100;

    return `${porcent}%`;
  };

  return <Styles.BarWrapper size={attrs.size} $porcent={porcentString()} />;
};

Bar.propTypes = {
  noShowAnimationOnFirstLoad: PropTypes.bool,
  onFinish: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  step: PropTypes.number,
  stepTime: PropTypes.number,
  steps: PropTypes.number,
};
