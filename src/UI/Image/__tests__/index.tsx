import React from 'react';
import render from 'react-test-renderer';

import Image from '../index';
import ThemeProvider from '../../ThemeProvider';

describe('Image', () => {
    it('Default snapshot', () => {
        const tree = render
            .create(
                <ThemeProvider>
                    <Image>Test</Image>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
