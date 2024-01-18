import { createStitches } from '@stitches/react';

export const COLOR_DATA = {
    BACKGROUND_PRIMARY: '#8bc64e',
    BACKGROUND_TERTIARY: '#ececec',
}

export const { theme, styled, css, globalCss, keyframes } = createStitches({
    theme: {
        colors: {
            backgroundPrimary: COLOR_DATA.BACKGROUND_PRIMARY,
            colorPrimary: '#FFFFFF',
            backgroundSecondary: '#FFFFFF',
            colorSecondary: '#56a306',
            backgroundTertiary: COLOR_DATA.BACKGROUND_TERTIARY,
        },
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
    }
});