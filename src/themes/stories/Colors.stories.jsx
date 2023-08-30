import React from "react";

import { ThemeDS } from "../..";

import { Styles } from "./Colors.styles";

const story = {
  title: "Theme/Colors",
};

export const OrangePallete = () => {
  return (
    <ThemeDS>
      <Styles.ColorBox $color="orange" $intensity="_900" />
      <Styles.ColorBox $color="orange" $intensity="_800" />
      <Styles.ColorBox $color="orange" $intensity="_700" />
      <Styles.ColorBox $color="orange" $intensity="_600" />
      <Styles.ColorBox $color="orange" $intensity="_500" />
      <Styles.ColorBox $color="orange" $intensity="_400" />
      <Styles.ColorBox $color="orange" $intensity="_300" />
      <Styles.ColorBox $color="orange" $intensity="_200" />
      <Styles.ColorBox $color="orange" $intensity="_100" />
    </ThemeDS>
  );
};

export const BlackPallete = () => {
  return (
    <ThemeDS>
      <Styles.ColorBox $color="black" $intensity="_900" />
      <Styles.ColorBox $color="black" $intensity="_800" />
      <Styles.ColorBox $color="black" $intensity="_700" />
      <Styles.ColorBox $color="black" $intensity="_600" />
      <Styles.ColorBox $color="black" $intensity="_500" />
      <Styles.ColorBox $color="black" $intensity="_400" />
      <Styles.ColorBox $color="black" $intensity="_300" />
      <Styles.ColorBox $color="black" $intensity="_200" />
      <Styles.ColorBox $color="black" $intensity="_100" />
    </ThemeDS>
  );
};

export default story;
