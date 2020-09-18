import React from 'react';
import render from 'react-test-renderer';

import Radio from '../index';
import ThemeProvider from '../../ThemeProvider';

describe('Radio', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Radio>Test</Radio>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
