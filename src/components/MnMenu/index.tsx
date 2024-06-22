import React from 'react';

import { styled } from '@mui/system'

import Menu from '@mui/material/Menu'

const MainMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
      background: theme.palette.background.default,
      border: '1px solid rgba(0, 0, 0, .3)',
      boxShadow: '0px 0px 14px -8px rgba(0,0,0,0.66) !important',
      marginTop: '5px',
    }
}))

type HandleClose = () => void

interface MnMenuPropsType {
    id: string;
    anchor: null | HTMLElement;
    onClose: HandleClose;
    children: React.ReactNode;
}

const MnMenu = ({ id, anchor, children, onClose }: MnMenuPropsType) => {

    const open = React.useMemo(() => Boolean(anchor), [anchor])

    return (
        <MainMenu
            id={id}
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={onClose}
        >
            {children}
        </MainMenu>
    )
}

export default MnMenu