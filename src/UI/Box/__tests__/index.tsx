import React from "react";
import render from "react-test-renderer";

import ThemeProvider from "../../ThemeProvider";

import Box from "../index";

describe("Box", () => {
  it("Default snapshot", () => {
    const tree = render.create(
      <ThemeProvider>
        <Box>Box content</Box>
      </ThemeProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
