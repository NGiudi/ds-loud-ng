import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Text } from "../../../";

import { getTimeObject, formatClock } from "../../../utils/time/clock";

const DEFAULT_PROPS = {
  endTime: null,
  formatTime: "hh:mm:ss",
  onFinish: () => {},
  showZero: true,
  text: {},
};

export const Countdown = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [time, setTime] = useState(0);

  const [startWithoutTime] = useState(() => {
    const firstTime = attrs.endTime - new Date().getTime();
    return firstTime < 0;
  });

  const timeoutRef = React.useRef();

  //? trigger countdown.
  useEffect(() => {
    if (time > 1000) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const id = setTimeout(() => {
        const now = new Date().getTime();
        setTime(attrs.endTime - now);
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
    setTime(attrs.endTime - new Date().getTime());
  }, [attrs.endTime]);

  //? execute the callback when the time expires.
  //? if it starts without time it does not execute.
  useEffect(() => {
    if (attrs.onFinish && !startWithoutTime && time < 1000) {
      attrs.onFinish();
    }
  }, [attrs.onFinish, startWithoutTime, time]);

  //? no show zero value.
  if (time < 1000 && !attrs.showZero) return null;

  return (
    <Text {...attrs.text}>
      {formatClock(getTimeObject(time), attrs.formatTime)}
    </Text>
  );
};

Countdown.propTypes = {
  endTime: PropTypes.number.isRequired,
  formatTime: PropTypes.oneOf(["hh:mm:ss", "mm:ss", "ss"]),
  onFinish: PropTypes.func,
  showZero: PropTypes.bool,
  text: PropTypes.object,
};
