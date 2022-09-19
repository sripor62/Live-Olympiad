// Some CSS
export const overrideComponentTheme = {

    MuiButtonBase: {
        styleOverrides: {
            // Name of the slot
            root: {
                borderRadius: "50px !important",
                minWidth: "240px !important",
                padding: "9px 16px !important",
            }
        }
    },

    MuiTabs: {
        styleOverrides: {
            flexContainer: {
                justifyContent: "center"
            }
        },
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
                minWidth: "90px !important",
                "&.Mui-selected": {
                    backgroundColor: "#F9BB47 !important",
                }
            },
            textColorWhite: {
                color: "#1E232C"
            },
            flexContainer: {
                justifyContent: "center"
            }
        }
    }
} 