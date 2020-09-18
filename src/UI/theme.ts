import theme from '@rebass/preset';

const extendedTheme = {
    ...theme,
    ...{
        variants: {
            ...theme.variants,
            ...{
                nav: {
                    ...theme.variants.nav,
                    ...{
                        fontSize: 3,
                    },
                },
            },
        },
    },
};

export default extendedTheme;
