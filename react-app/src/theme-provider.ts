import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const customTheme = createTheme({
    shadows: {
        ...baseTheme.shadows,
        4: '0px 2px 28px -8px rgba(38, 38, 38, .12);'
    },
    typography: {
        fontFamily: "'JetBrains Mono', Roboto, sans-serif",
        h1: {
            fontSize: '28px',
        },
        h2: {
            fontSize: '24px',
        },
        body1: {
            fontSize: '14px',
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 750,
            desktop: 1200
        }
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    paddingLeft: "8px",
                    paddingRight: "8px"
                }
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    paddingRight: "8px"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        opacity: 0.5
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: "16px"
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: "16px"
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: "16px"
                }
            }
        }
    }
});

export const lightTheme = createTheme({
    ...customTheme,
    palette: {
        mode: 'light',
        text: {
            primary: "#424242"
        }
    }
})

export const darkTheme = createTheme({
    ...customTheme,
    palette: {
        mode: 'dark',
        text: {
            primary: "#D7CCC8"
        },
        background: {
            default: "#212121",
            paper: "#212121"
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 4px 10px -5px rgba(12, 12, 36, 0.7)",
                    backgroundImage: 'none',
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#D7CCC8"
                },
            },
        },
    },
});

// Augment the types to include overrides
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        desktop: true;
    }
}