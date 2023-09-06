import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Text } from "../../../";

import { getTimeObject, formatClock } from "../../../utils/time/clock";

export const Countdown = (props) => {
  const { endTime, formatTime, onFinish, showZero, text } = props;

  const [time, setTime] = useState(0);

  const [startWithoutTime] = useState(() => {
    const firstTime = endTime - new Date().getTime();
    return firstTime < 0;
  });

  const timeoutRef = React.useRef();

  //? trigger countdown.
  useEffect(() => {
    if (time > 1000) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const id = setTimeout(() => {
        const now = new Date().getTime();
        setTime(endTime - now);
      }, 1000);

      timeoutRef.current = id;
    }
  }, [time]);

  //? clear timer when unmounted component
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  //? update the countdown when the end date and time are changed.
  useEffect(() => {
    setTime(endTime - new Date().getTime());
  }, [endTime]);

  //? execute the callback when the time expires.
  //? if it starts without time it does not execute.
  useEffect(() => {
    if (onFinish && !startWithoutTime && time < 1000) {
      onFinish();
    }
  }, [onFinish, startWithoutTime, time]);

  //? no show zero value.
  if (time < 1000 && !showZero) return null;

  return <Text {...text}>{formatClock(getTimeObject(time), formatTime)}</Text>;
};

Countdown.propTypes = {
  endTime: PropTypes.number.isRequired,
  formatTime: PropTypes.oneOf(["hh:mm:ss", "mm:ss", "ss"]),
  onFinish: PropTypes.func,
  showZero: PropTypes.bool,
  text: PropTypes.object,
};

Countdown.defaultProps = {
  endTime: null,
  formatTime: "hh:mm:ss",
  onFinish: null,
  showZero: true,
  text: {},
};
