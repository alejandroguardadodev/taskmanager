// import React from 'react';

import { styled } from '@mui/system'

import Drawer from '@mui/material/Drawer'

import useResponsive from '../../../hooks/useResponsive'

import MenuContent from './MenuContent'

const Container = styled(Drawer, {
    shouldForwardProp: (props) => props !== "menuwidth" && props !== "menuopen"
})<{ menuwidth: number; menuopen: boolean; }>(({ theme, menuwidth, menuopen }) => ({
    width: '100vw',
    maxWidth: `${menuwidth}px`,
    height: '100%',
    flexShrink: 0,
    transition: 'width .2s ease-in-out',
    overflow: 'visible',
    '& .MuiDrawer-paper': {
        width: '100vw',
        maxWidth: `${menuwidth}px`,
        height: '100%',
        background: `${theme.palette.background.default}`,
        border: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transition: 'width .2s ease-in-out',
        padding: '0px',
    },
    [theme.breakpoints.up("lg")]: {
        position: 'relative', 
        '& .MuiDrawer-paper': {
            borderRight: '1px solid rgba(0, 0, 0, .2)',
            position: 'absolute', 
            background: 'transparent !important',
        },
        ...(!menuopen && {
            width: '0px',
        }),
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: '100vw',
        '& .MuiDrawer-paper': {
            maxWidth: '100vw',
        }
    }
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
            <MenuContent onMenuClose={onClose} />
        </Container>
    )
}

export default MainMenu