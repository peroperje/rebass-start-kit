import React from "react";
import render from "react-test-renderer";

import Checkbox from "../index";
import ThemeProvider from "../../ThemeProvider";

describe("Checkbox", () => {
  it("Default snapshot", () => {
    const tree = render
      .create(
        <ThemeProvider>
          <Checkbox>Test</Checkbox>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
