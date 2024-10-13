import React from 'react'

import { styled } from '@mui/system'

import { 
    Box,
    Grid,
    Accordion,
    AccordionDetails,
    AccordionSummary 
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import useMainMenu from '../../../../hooks/useMainMenu'

const Container = styled(Box, {
    shouldForwardProp: (props) => props !== "isMenuOpen"
})<{isMenuOpen: boolean}>(({ theme, isMenuOpen }) => ({
    width: '100%',
    marginTop: '20px',
    padding: '10px 20px',
    transition: 'padding .2s ease-in-out, width .2s ease-in-out',
    [theme.breakpoints.down("md")]: {
        padding: '0px',
    },
    ...(!isMenuOpen && {
        [theme.breakpoints.up("md")]: {
            padding: '10px 0px !important',
        },
    })
}))

const DayCarePageHeader = () => {

    const { isMainMenuOpen } = useMainMenu()

  return (
    <Container isMenuOpen={isMainMenuOpen}>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="overview-panel"
                id="overview-panel-header"
                className='header'
            >
                Overview
            </AccordionSummary>
            <AccordionDetails>
                <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={{ xs: 1, sm: 4, md: 12 }}>

                </Grid>
            </AccordionDetails>
        </Accordion>
    </Container>
  )
}

export default DayCarePageHeader