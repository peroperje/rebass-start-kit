import React from 'react';
import { MoonLoader } from 'react-spinners';

import { Text } from 'rebass';

export interface Props {
    size: number;
    text?: string;
}

const Loader: React.FC<Props> = ({ size, text }: Props): JSX.Element => (
    <>
        <MoonLoader size={size} />
        <Text>{text}</Text>
    </>
);
export default Loader;
