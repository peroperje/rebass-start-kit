import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import theme from "./theme";

export interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

export default ThemeProvider;
