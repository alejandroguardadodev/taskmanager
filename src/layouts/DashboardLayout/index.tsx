import React from "react"

import { Outlet } from "react-router-dom"

import { styled } from '@mui/system'

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

import Header from "./Header"
import MainMenu from "./MainMenu"

import { useResizeDetector } from "react-resize-detector"

import useResizePage from "../../hooks/useResizePage"
import useResponsive from "../../hooks/useResponsive"
import useMainMenu from "../../hooks/useMainMenu"

const OUTLETCONTAINER_PADDING_VERTICAL = 20
const MENU_WIDTH_TABLET = 300
const MENU_WIDTH_NORMAL = 240

const Container = styled('article')(() => ({
    width: '100vw',
    minWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',
    overflow: 'hidden !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
}))

const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1, 
  height: '100%',
  padding: '0px',
  margin: '0px',
  [theme.breakpoints.down("lg")]: {
    padding: '0px 3%',
  },
  [theme.breakpoints.down("sm")]: {
    padding: '0px 5%',
  },
}))

const OutletContainer = styled("article", {
  shouldForwardProp: (props) => props !== "isMenuOpen"
})<{isMenuOpen: boolean}>(({ isMenuOpen }) => ({
  width: '100%',
  height: '100%',
  maxWidth: '1500px',
  paddingTop: '20px',
  boxSizing: 'border-box',
  transition: 'all .2s ease-in-out',
  ...(isMenuOpen && {
    paddingLeft: `${OUTLETCONTAINER_PADDING_VERTICAL}px`,
    paddingRight: `${OUTLETCONTAINER_PADDING_VERTICAL}px`,
  })
}))

const DashboardLayout = () => {

  const { pageRef } = useResizePage()
  
  const { isDesktop, isTablet } = useResponsive()

  const { ref:outletContainerRef, width:outletContainerWidth } = useResizeDetector()

  const { isMainMenuOpen, openMainMenu, closeMainMenu } = useMainMenu()

  const closeMenuHandle = () => (closeMainMenu())
  const toogleHenu = () => {
    if (isMainMenuOpen) closeMainMenu()
    else openMainMenu()
  }

  React.useEffect(() => {
    if (isDesktop) openMainMenu()
    else closeMainMenu()

  }, [isDesktop])

  return (
    <Container>
        <Header onToogleMenu={toogleHenu} title="Moonnuit Manager" />
        <Stack flexDirection="row" justifyContent="flex-start" alignItems="center" sx={{ flexGrow: 1, width: '100%' }}>
          <MainMenu 
            open={isMainMenuOpen}
            menuwidth={isTablet? MENU_WIDTH_TABLET: MENU_WIDTH_NORMAL}
            onClose={closeMenuHandle}
          />
          <ContentContainer>
            <Stack 
              ref={pageRef} 
              flexDirection="column" 
              justifyContent="flex-start" 
              alignItems="center"
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              <OutletContainer ref={outletContainerRef} isMenuOpen={isMainMenuOpen}>
                <Outlet context={[isMainMenuOpen, outletContainerWidth]} />
              </OutletContainer>
            </Stack>
          </ContentContainer>
        </Stack>
    </Container>
  )
}

export default DashboardLayout