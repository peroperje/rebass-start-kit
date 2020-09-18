import React from "react";
import render from "react-test-renderer";

import Button from "../index";
import ThemeProvider from "../../ThemeProvider";

describe("Button", () => {
  it("Default snapshot", () => {
    const tree = render
      .create(
        <ThemeProvider>
          <Button>Test</Button>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
