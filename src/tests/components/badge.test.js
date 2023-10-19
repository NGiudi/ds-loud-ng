import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Badge } from "../../components/atoms/Badge/Badge";
import { ThemeDS } from "../../components/layout/ThemeDS/ThemeDS";

test("render content", () => {
  const { getByText } = render(
    <ThemeDS>
      <Badge>Test</Badge>
    </ThemeDS>,
  );

  const badgeContent = getByText("Test");

  expect(badgeContent).toBeInTheDocument();
});
