// import React from 'react';

import { styled } from '@mui/system'

import Drawer from '@mui/material/Drawer'

import useResponsive from '../../../hooks/useResponsive';

const Container = styled(Drawer, {
    shouldForwardProp: (props) => props !== "menuwidth" && props !== "menuopen"
})<{ menuwidth: number; menuopen: boolean; }>(({ theme, menuwidth, menuopen }) => ({
    position: 'relative', 
    width: '100vw',
    maxWidth: `${menuwidth}px`,
    height: '100%',
    flexShrink: 0,
    transition: 'width .2s ease-in-out',
    overflow: 'visible',
    '& .MuiDrawer-paper': {
        position: 'absolute', 
        width: '100vw',
        maxWidth: `${menuwidth}px`,
        height: '100%',
        background: 'transparent !important',
        border: 'none',
        overflow: 'visible',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    [theme.breakpoints.up("lg")]: {
        '& .MuiDrawer-paper': {
            borderRight: '1px solid rgba(0, 0, 0, .2)',
        }
    },
    ...(!menuopen && {
        width: '0px',
    }),
}))

type OnActionHandle = () => void

interface MainMenuPropsType {
    menuwidth: number;
    open: boolean;
    onClose: OnActionHandle;
}

const MainMenu = ({ open=true, menuwidth, onClose }:MainMenuPropsType) => {

    const { isDesktop } = useResponsive()

    return (
        <Container
            open={open}
            menuopen={open}
            menuwidth={menuwidth}
            variant={ isDesktop? "persistent" : "temporary" }
            onClose={() => {if (!isDesktop) onClose?.();}}
            anchor="left"
        >
            MainMenu
        </Container>
    )
}

export default MainMenu