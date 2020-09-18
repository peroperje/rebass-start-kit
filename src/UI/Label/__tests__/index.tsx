import React from 'react';
import render from 'react-test-renderer';

import Lable from '../index';
import ThemeProvider from '../../ThemeProvider';

describe('Lable', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Lable>Test</Lable>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
