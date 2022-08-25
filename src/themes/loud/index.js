import { shadows, textWeights } from "./basicStyles";
import components from "./components";
import colors from "./colors";

const loud = {
  components,
  textWeights,
  shadows,
};

export const loudLight = {
  colors: colors.whiteTheme,
  ...loud,
};
