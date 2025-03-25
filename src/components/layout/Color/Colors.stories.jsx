import React from "react";

import { Text, ThemeDS } from "../../../";

import { Styles } from "./Colors.styles";

const meta = {
  title: "Theme/Colors",
};

export const BlackPallete = () => {
  return (
    <ThemeDS>
      <Styles.ColorBox $color="black" $intensity="_900">
        <Text color="black_100" type="subtitle">
          _900
        </Text>

        <Text color="black_100" type="subtitle">
          #18181B
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_800">
        <Text color="black_100" type="subtitle">
          _800
        </Text>

        <Text color="black_100" type="subtitle">
          #262626
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_700">
        <Text color="black_100" type="subtitle">
          _700
        </Text>

        <Text color="black_100" type="subtitle">
          #363636
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_600">
        <Text color="black_100" type="subtitle">
          _600
        </Text>

        <Text color="black_100" type="subtitle">
          #52525B
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_500">
        <Text type="subtitle">_500</Text>
        <Text type="subtitle">#71717A</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_400">
        <Text type="subtitle">_400</Text>
        <Text type="subtitle">#A1A1AA</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_300">
        <Text type="subtitle">_300</Text>
        <Text type="subtitle">#D4D4D8</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_200">
        <Text type="subtitle">_200</Text>
        <Text type="subtitle">#E4E4E7</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="black" $intensity="_100">
        <Text type="subtitle">_100</Text>
        <Text type="subtitle">#F4F4F5</Text>
      </Styles.ColorBox>
    </ThemeDS>
  );
};

export const OrangePallete = () => {
  return (
    <ThemeDS>
      <Styles.ColorBox $color="orange" $intensity="_900">
        <Text color="black_100" type="subtitle">
          _900
        </Text>

        <Text color="black_100" type="subtitle">
          #7B441E
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_800">
        <Text type="subtitle">_800</Text>
        <Text type="subtitle">#B75404</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_700">
        <Text type="subtitle">_700</Text>
        <Text type="subtitle">#CE712A</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_600">
        <Text type="subtitle">_600</Text>
        <Text type="subtitle">#F47A1D</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_500">
        <Text type="subtitle">_500</Text>
        <Text type="subtitle">#F78223</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_400">
        <Text type="subtitle">_400</Text>
        <Text type="subtitle">#F79A51</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_300">
        <Text type="subtitle">_300</Text>
        <Text type="subtitle">#FAAD82</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_200">
        <Text type="subtitle">_200</Text>
        <Text type="subtitle">#FBBD89</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="orange" $intensity="_100">
        <Text type="subtitle">_100</Text>
        <Text type="subtitle">#FEE4CD</Text>
      </Styles.ColorBox>
    </ThemeDS>
  );
};

export const RedPallete = () => {
  return (
    <ThemeDS>
      <Styles.ColorBox $color="red" $intensity="_900">
        <Text color="black_100" type="subtitle">
          _900
        </Text>

        <Text color="black_100" type="subtitle">
          #7B1E1E
        </Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_800">
        <Text type="subtitle">_800</Text>
        <Text type="subtitle">#B70404</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_700">
        <Text type="subtitle">_700</Text>
        <Text type="subtitle">#CE2A2A</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_600">
        <Text type="subtitle">_600</Text>
        <Text type="subtitle">#F41D1D</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_500">
        <Text type="subtitle">_500</Text>
        <Text type="subtitle">#F72323</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_400">
        <Text type="subtitle">_400</Text>
        <Text type="subtitle">#F75151</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_300">
        <Text type="subtitle">_300</Text>
        <Text type="subtitle">#FA8282</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_200">
        <Text type="subtitle">_200</Text>
        <Text type="subtitle">#FB8989</Text>
      </Styles.ColorBox>

      <Styles.ColorBox $color="red" $intensity="_100">
        <Text type="subtitle">_100</Text>
        <Text type="subtitle">#FECDCD</Text>
      </Styles.ColorBox>
    </ThemeDS>
  );
};

export default meta;