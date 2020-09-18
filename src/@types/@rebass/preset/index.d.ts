interface Preset {
  colors: {
    [key: string]: string;
  };
  fonts: {
    [key: string]: string;
  };
  fontSizes: [number];
  fontWeights: {
    [key: string]: number;
  };
  lineHeights: {
    [key: string]: number;
  };
  variants: {
    [key: string]: {
      [key: string]: any;
    };
  };
}
declare module "@rebass/preset" {
  import theme from "@rebass/preset";
  const preset = theme as Preset;
  export default preset;
}
