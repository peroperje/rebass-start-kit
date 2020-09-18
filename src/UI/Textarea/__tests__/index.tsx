import React from 'react';
import render from 'react-test-renderer';

import Textarea from '../index';
import ThemeProvider from '../../ThemeProvider';

describe('Textarea', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Textarea>Test</Textarea>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
