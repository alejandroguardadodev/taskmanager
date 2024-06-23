import React from "react"

import { Outlet } from "react-router-dom"

import { styled } from '@mui/system'

import Stack from "@mui/material/Stack"

import Header from "./Header"
import MainMenu from "./MainMenu"

import useResponsive from "../../hooks/useResponsive"

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

const ContentContainer = styled(Stack)(({ theme }) => ({
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

const DashboardLayout = () => {

  const { isDesktop } = useResponsive()

  const [ openmenu, setOpenmenu ] = React.useState(false)

  const closeMenuHandle = () => (setOpenmenu(false))
  const toogleHenu = () => {setOpenmenu(!openmenu)}

  React.useEffect(() => {
    if (isDesktop) setOpenmenu(true)
    else setOpenmenu(false)
  }, [isDesktop])

  return (
    <Container>
        <Header onToogleMenu={toogleHenu} title="Moonnuit Manager" />
        <Stack flexDirection="row" justifyContent="flex-start" alignItems="center" sx={{ flexGrow: 1, width: '100%' }}>
          <MainMenu 
            open={openmenu}
            menuwidth={240}
            onClose={closeMenuHandle}
          />
          <ContentContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
            <Outlet />
          </ContentContainer>
        </Stack>
    </Container>
  )
}

export default DashboardLayout