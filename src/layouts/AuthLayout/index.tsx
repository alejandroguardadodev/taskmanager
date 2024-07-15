import { Outlet } from "react-router-dom"

import { styled } from '@mui/system'

import Box from "@mui/material/Box"

import PurpleImg from '../../assets/textures/purple.jpg'

const Container = styled('article')(() => ({
    width: '100vw',
    minWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',
    overflow: 'hidden !important',
    backgroundImage: `url("${PurpleImg}")`,
    backgroundRepeat: `no-repeat, no-repeat`,
    backgroundSize: `cover`,
    position: 'relative',
    '&:before': {
        content: '""',
        display: 'block',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        backdropFilter: 'blur(40px)',
    }
}))

const ContentContainer = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    minWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',
    overflow: 'hidden !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

const AuthLayout = () => {
  return (
    <Container>
        <ContentContainer>
            <Outlet />
        </ContentContainer>
    </Container>
  )
}

export default AuthLayout