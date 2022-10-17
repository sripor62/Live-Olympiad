
export const tabStyle = {
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
                fontFamily:'Urbanist',
                textTransform:"none",
                fontWeight:700,
                "&.Mui-selected": {
                    backgroundColor: "#F9BB47 !important",
                    color: "#fff !important",
                }
            },

            flexContainer: {
                justifyContent: "center"
            }
        }
    }
}