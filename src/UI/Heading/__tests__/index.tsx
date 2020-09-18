import React from 'react';
import render from 'react-test-renderer';

import Heading from '../index';
import ThemeProvider from '../../ThemeProvider';

describe('Heading', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Heading>Test</Heading>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
