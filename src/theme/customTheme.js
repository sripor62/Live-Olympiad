import { createTheme, responsiveFontSizes } from "@mui/material";

export const customTheme = responsiveFontSizes(createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: "#00679C",
            light: "#0090C7",
            dark: "#004172",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#CC3E22",
            light: "#F25F3D",
            dark: "#610004",
            contrastText: "#FFFFFF",
        },
        action: {
            main: "#777777",
            light: "#EEEEEE",
            dark: "#333333",
            contrastText: '#FFFFFF'
        },
        error: {
            main: '#C80021',
            dark: '#940000',
            light: '#FC3844'
        }
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
        fontSize: 14,
        lineHeight: 1,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontSize: 62,
        },
        h2: {
            fontSize: 48,
        },
        h3: {
            fontSize: 40,
        },
        h4: {
            fontSize: 32,
        },
        h5: {
            fontSize: 26,
        },
        h6: {
            fontSize: 20,
        },

        subtitle1: {
            fontSize: 22,
        },
        // subtitle2: buildVariant(fontWeightLight, 14, 1.57, 0.1),
        subtitle2: {
            fontSize: 18,
        },
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14,
        },
        button: {
            textTransform: 'none',
            fontWeight: 400,
            fontSize: 20,
        },

        // caption: h6 as per our design
        // overline: buildVariant(fontWeightRegular, 12, 2.66, 1),
    },

    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#F4F4F4',
                },
            },
        },
    },

}))