import React from 'react';
import render from 'react-test-renderer';

import ThemeProvider from '../../ThemeProvider';

import Card from '../index';

describe('Card', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Card>Test</Card>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
