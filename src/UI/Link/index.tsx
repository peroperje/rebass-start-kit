import React from 'react';
import { LinkProps as RRLinkProps } from 'react-router-dom';
import { LinkProps, Link as RBLink } from 'rebass';

export const RebassLink = RBLink;
export type Props = LinkProps & RRLinkProps;

const Link: React.FC<Props> = (props: Props): JSX.Element => (
    <RBLink {...props} />
);
export default Link;
