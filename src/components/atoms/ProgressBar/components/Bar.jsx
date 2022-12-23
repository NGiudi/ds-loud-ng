import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { Styles } from "../ProgressBar.styles";

export const Bar = (props) => {
  const { onFinish, step, stepTime, steps } = props;

  const [width, setWidth] = useState(0);

  const timer = useRef();

  const animationAddStep = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setWidth((previusWidth) => previusWidth + 1);
    }, stepTime);
  };

  const animationSubtractStep = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setWidth((previusWidth) => previusWidth - 1);
    }, stepTime);
  };

  //? clear timer when unmounted component.
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  //? animation controller.
  useEffect(() => {
    const finishWidth = Math.floor((step * 100) / steps);

    if (props.noShowAnimationOnFirstLoad) {
      setWidth(finishWidth);
    } else {
      if (finishWidth > width) {
        animationAddStep();
      } else if (finishWidth < width) {
        animationSubtractStep();
      }
    }

    if (finishWidth === width) {
      onFinish && onFinish();
    }
  }, [step, steps, width]); // eslint-disable-line react-hooks/exhaustive-deps

  const porcentString = () => {
    let porcent = width;

    if (porcent <= 0) porcent = 0;
    if (porcent > 100) porcent = 100;

    return `${porcent}%`;
  };

  return <Styles.BarWrapper size={props.size} porcent={porcentString()} />;
};

Bar.propTypes = {
  noShowAnimationOnFirstLoad: PropTypes.bool,
  onFinish: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  step: PropTypes.number,
  stepTime: PropTypes.number,
  steps: PropTypes.number,
};

Bar.defaultProps = {
  noShowAnimationOnFirstLoad: false,
  onFinish: null,
  size: "md",
  step: 0,
  stepTime: 10,
  steps: 0,
};
