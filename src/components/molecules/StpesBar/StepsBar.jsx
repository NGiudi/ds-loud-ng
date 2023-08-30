import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon, ProgressBar } from "../../../";

import { Circle, ProgressBarWrapper, StepsWrapper } from "./StepsBar.styles";

export const StepsBar = (props) => {
  const { size, step, steps } = props;

  const [previousStep, setPreviousStep] = useState(step);

  const finishStepChange = () => {
    const diff = step - previousStep;

    if (diff > 0) {
      setPreviousStep((prev) => prev + 1);
    } else if (diff < 0) {
      setPreviousStep((prev) => prev - 1);
    }
  };

  const selectTypeCircle = (renderStep) => {
    if (renderStep < step) return "checkedCircle";
    if (renderStep > step) return "pendingCircle";

    if (renderStep === step && previousStep > step) return "checkedCircle";
    if (renderStep === step && previousStep < step) return "pendingCircle";
    if (renderStep === step) return "circle";
  };

  const noShowOldAnaimation = (renderStep) => {
    const diff = step - previousStep;

    const prueba = !(
      (diff > 0 && renderStep === step) ||
      (diff < 0 && renderStep === step + 1)
    );

    return prueba;
  };

  const renderIconInsideCircle = (renderStep) => {
    if (renderStep < step || (renderStep === step && previousStep > step)) {
      return <Icon icon="check" size="sm" />;
    }

    return null;
  };

  const renderStep = (renderStep) => {
    return (
      <React.Fragment key={`step-${renderStep}`}>
        {renderStep !== 1 && (
          <ProgressBarWrapper>
            <ProgressBar
              borderRound
              noShowAnimationOnFirstLoad={noShowOldAnaimation(renderStep)}
              onFinish={finishStepChange}
              size="sm"
              step={renderStep <= step ? 100 : 0}
              style={{ flexGrow: "1" }}
            />
          </ProgressBarWrapper>
        )}

        <Circle size={size} type={selectTypeCircle(renderStep)}>
          {renderIconInsideCircle(renderStep)}
        </Circle>
      </React.Fragment>
    );
  };

  const renderColumnSteps = () => {
    let stepsArray = [];

    for (let i = 1; i <= steps; i++) {
      stepsArray.push(renderStep(i));
    }

    return <StepsWrapper>{stepsArray}</StepsWrapper>;
  };

  return renderColumnSteps();
};

StepsBar.propTypes = {
  size: PropTypes.oneOf(["md"]),
  steps: PropTypes.number.isRequired,
  step: PropTypes.number,
};

StepsBar.defaultProps = {
  size: "md",
  steps: 5,
  step: 1,
};
