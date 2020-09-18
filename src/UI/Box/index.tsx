import React from 'react';
import * as rebass from 'rebass';

export type BoxProps = rebass.BoxProps;

const BoxR = rebass.Box;

const Box: React.FC<BoxProps> = (props: BoxProps) => <BoxR {...props} />;

export default Box;
