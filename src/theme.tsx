import { createTheme } from '@mui/material/styles'

const breakpoints = {
    values: {
      xs: 0,
      sm: 600, 
      md: 1050, 
      lg: 1400, 
      xl: 1736
    }
}

const palette = {
    background: {
        default: '#F5F5F5'
    },
    primary: {
        light: '#3EAEA3',
        main: '#025951',
        dark: '#020873',
    },
    secondary: {
        main: '#FBC61C',
        light: '#F2AC29',
        dark: '#AD4900',
    },
}

const theme = createTheme({
    breakpoints,
    palette,
    typography: {
        h3: {
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 800,
            fontSize: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            color: 'black'
        },
        h4: {
            fontFamily: "'Montserrat'",
            fontWeight: 400,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            color: 'black'
        },
        h5: {
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 600,
            fontSize: '.9rem',
            textTransform: 'uppercase',
        },
        h6: {
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 800,
            fontSize: '.9rem',
            textTransform: 'uppercase',
            color: 'rgba(0, 0, 0, .8)'
        },
        body1: {
            color: 'black',
            fontFamily: "'Montserrat'",
            fontWeight: '300',
            fontSize: '.845rem',
            lineHeight: '1rem',
        },
        subtitle1: {
            color: 'black',
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '1rem',
        },
        caption: {
            fontFamily: "'Montserrat'",
            fontWeight: '400',
            fontSize: '.8rem',
        }
    },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: '.9rem',
                    color: 'rgba(0, 0, 0, .8)'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Montserrat'",
                    fontWeight: 600,
                    fontSize: '.745rem',
                    textTransform: 'uppercase',
                    paddingTop: '6px',
                    paddingBottom: '6px'
                },
                contained: {
                    padding: '10px 50px',
                    fontWeight: 700,
                    fontSize: '.8rem',
                    boxShadow: 'none',
                    //border: '1px solid #025951',
                    transition: 'box-shadow .2s ease-in-out',
                    '&:hover': {
                        background: '#025951',
                        boxShadow: '0px 0px 10px 0px rgba(54,144,136,1)',
                        //border: '1px solid rgba(54,144,136, .5)',
                    }
                }
            }
        },
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: '.9rem',
                    color: 'black !important'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: "'Montserrat'",
                    fontWeight: 400,
                    fontSize: '.8rem',
                    color: 'black !important',
                    '& .MuiButtonBase-root.MuiTableSortLabel-root svg': {
                        fontSize: '.8rem'
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                        fontFamily: "'Montserrat'",
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, .7) !important',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    },
                    '& input': {
                        fontFamily: "'Montserrat'",
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        background: palette.background.default,
                        border: '1px solid rgba(0, 0, 0, .3)',
                        boxShadow: '0px 0px 14px -8px rgba(0,0,0,0.66) !important',
                        marginTop: '5px',
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontFamily: "'Montserrat'",
                    fontWeight: 500,
                    fontSize: '.7rem',
                }
            }
        }
    }
})

export default theme