import React from 'react';
import render from 'react-test-renderer';

import ThemeProvider from '../../ThemeProvider';

import Input from '../index';

describe('Input', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Input>Test</Input>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
