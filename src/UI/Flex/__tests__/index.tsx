import React from "react";
import render from "react-test-renderer";

import Flex from "../index";

import ThemeProvider from "../../ThemeProvider";

describe("Flex", () => {
  it("Default snapshot", () => {
    const tree = render
      .create(
        <ThemeProvider>
          <Flex>Test</Flex>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
