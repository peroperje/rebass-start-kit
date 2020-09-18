import React from 'react';
import render from 'react-test-renderer';

import ThemeProvider from '../../ThemeProvider';

import Text from '../index';

describe('Text', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Text>Test</Text>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
