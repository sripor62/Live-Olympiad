// Some CSS
export const overrideComponentTheme = {
    MuiInputBase: {
        styleOverrides: {
            // Name of the slot
            root: {
                padding: "0px !important",
                backgroundColor: "#F7F8F9",
                borderRadius: "10px !important"
            },
            input: {
                padding: "15px 24px!important",
            },
        },
    },
    MuiButtonBase: {
        styleOverrides: {
            // Name of the slot
            root: {
                MuiTab: {
                    root: {
                        fontSize: "20px"
                    }
                }
            }
        }
    },

    MuiTab: {
        styleOverrides: {
            root: {
                backgroundColor: "#F7F8F9 !important",
                borderRadius: "10px !important",
                fontSize: "16px !important",
                lineHeight: "19px !important",
                minHeight: "40px !important",
                padding: "0px !important",
                marginRight: "10px !important",
                "&.Mui-selected": {
                    backgroundColor: "#F9BB47 !important",
                }
            },
            textColorWhite: {
                color: "#1E232C"
            }
        }
    }
} 