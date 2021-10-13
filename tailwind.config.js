module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navcolor: {
                    50: '#edf1fc',
                    100: '#d3d4e1',
                    200: '#b6b8c9',
                    300: '#989bb2',
                    400: '#7c7f9b',
                    500: '#636582',
                    600: '#4c4f66',
                    700: '#363849',
                    800: '#21222e',
                    900: '#0a0a16',
                },
                grayLike: {
                    50: '#f8f0f2',
                    100: '#d9d9d9',
                    200: '#bfbfbf',
                    300: '#a6a6a6',
                    400: '#8c8c8c',
                    500: '#737373',
                    600: '#595959',
                    700: '#404040',
                    800: '#262626',
                    900: '#120b0d',

                },
                grayHamburgerMenu: {
                    50: '#f2f2f8',
                    100: '#d7d7da',
                    200: '#bdbdc0',
                    300: '#a2a2a5',
                    400: '#88888c',
                    500: '#6e6e73',
                    600: '#56565a',
                    700: '#3d3d40',
                    800: '#252528',
                    900: '#0c0c12',
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}