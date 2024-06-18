import React from "react";

import { Dropzone, ThemeDS } from "../../../";

const meta = {
  argTypes: {

  },
  component: Dropzone,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Molecules/Dropzone",
};

export const Example = () => {
  return (
    <ThemeDS>
      <Dropzone
        accept={["image"]}
        margin="a-20"
        maxSize={20480}
        maxCount={3}
      />
    </ThemeDS>
  );
};

export default meta;
