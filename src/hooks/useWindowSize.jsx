import { useState, useEffect } from "react";

export const useWindowSize = () => {
  //? Initialize state with undefined width/height so server and client renders match
  //? Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //? handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); //? Empty array ensures that effect is only run on mount

  return windowSize;
};
