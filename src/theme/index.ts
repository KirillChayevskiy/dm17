import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            50:  '#eeebff',
            100: '#cdc4f2',
            200: '#ab9ee3',
            300: '#8a77d5',
            400: '#6850c8',
            500: '#4f37af',
            600: '#3d2b89',
            700: '#2c1e63',
            800: '#19113d',
            900: '#0a041a',
        },
    },
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Montserrat, ${base.fonts?.body}`,
    }
});


export default theme;
