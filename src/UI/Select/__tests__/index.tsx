import React from "react";
import render from "react-test-renderer";

import Select from "../index";
import ThemeProvider from "../../ThemeProvider";

describe("Select", () => {
  it("Default snapshot", () => {
    const tree = render
      .create(
        <ThemeProvider>
          <Select>Test</Select>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
