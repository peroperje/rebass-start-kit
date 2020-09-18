import React from "react";
import render from "react-test-renderer";

import Switch from "../index";
import ThemeProvider from "../../ThemeProvider";

describe("Switch", () => {
  it("Default snapshot", () => {
    const tree = render
      .create(
        <ThemeProvider>
          <Switch>Test</Switch>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
