import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon, ProgressBar } from "../../../";

import { Circle, ProgressBarWrapper, StepsWrapper } from "./StepsBar.styles";

const DEFAULT_PROPS = {
  margin: "a-0",
  size: "md",
  steps: 5,
  step: 1,
};


export const StepsBar = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [previousStep, setPreviousStep] = useState(attrs.step);

  const finishStepChange = () => {
    const diff = attrs.step - previousStep;

    if (diff > 0) {
      setPreviousStep((prev) => prev + 1);
    } else if (diff < 0) {
      setPreviousStep((prev) => prev - 1);
    }
  };

  const selectTypeCircle = (renderStep) => {
    if (renderStep < attrs.step) return "checkedCircle";
    if (renderStep > attrs.step) return "pendingCircle";

    if (renderStep === attrs.step && previousStep > attrs.step) return "checkedCircle";
    if (renderStep === attrs.step && previousStep < attrs.step) return "pendingCircle";
    if (renderStep === attrs.step) return "circle";
  };

  const noShowOldAnaimation = (renderStep) => {
    const diff = attrs.step - previousStep;

    const prueba = !(
      (diff > 0 && renderStep === attrs.step) ||
      (diff < 0 && renderStep === attrs.step + 1)
    );

    return prueba;
  };

  const renderIconInsideCircle = (renderStep) => {
    if (renderStep < attrs.step || (renderStep === attrs.step && previousStep > attrs.step)) {
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
              step={renderStep <= attrs.step ? 100 : 0}
              style={{ flexGrow: "1" }}
            />
          </ProgressBarWrapper>
        )}

        <Circle size={attrs.size} type={selectTypeCircle(renderStep)}>
          {renderIconInsideCircle(renderStep)}
        </Circle>
      </React.Fragment>
    );
  };

  const renderColumnSteps = () => {
    let stepsArray = [];

    for (let i = 1; i <= attrs.steps; i++) {
      stepsArray.push(renderStep(i));
    }

    return <StepsWrapper $margin={attrs.margin}>{stepsArray}</StepsWrapper>;
  };

  return renderColumnSteps();
};

StepsBar.propTypes = {
  margin: PropTypes.string,
  size: PropTypes.oneOf(["md"]),
  steps: PropTypes.number.isRequired,
  step: PropTypes.number,
};
