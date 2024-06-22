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
    }
})

export default theme