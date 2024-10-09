import React from 'react'

import { styled } from '@mui/system'

import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

const CustomMenuItem = styled(MenuItem, {
    shouldForwardProp: (props) => props !== "dissableIconAnimation" && props !== "dissablePaddingBottom" && props !== "solebutton" && props !== "active"
})<{ dissableIconAnimation: boolean; dissablePaddingBottom: boolean; solebutton: boolean; active: boolean; }>(({ theme, dissableIconAnimation, dissablePaddingBottom, solebutton, active }) => ({
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0)',
    ...(!dissablePaddingBottom && {
        marginBottom: '3px',
    }),
    ...( solebutton && {
        borderRadius: '5px',
        width: '90%'
    }),
    transition: 'border .2s ease-in-out',
    '& .icon-object svg': {
        transition: 'transform .2s ease-in-out, color .2s ease-in-out'
    },
    '&:hover': {
        ...( !dissableIconAnimation && {
            '& .icon-object svg': {
                transform: 'translate(2px, 0px)',
                color: theme.palette.primary.main,
            }
        }),
        ...( solebutton && {
            border: '1px solid rgba(0, 0, 0, .2)',
        })
    },
    ...(active && {
        ...( solebutton && {
            border: '1px solid rgba(3, 35, 64, .6) !important',
        }),
        '& .icon-object svg': {
            color: 'rgb(3, 35, 64)',
        },
    })
}))

const Text = styled(ListItemText)(() => ({
    fontFamily: "'Montserrat' !important",
    fontWeight: '400 !important',
    fontSize: '.8rem',
    textTransform: 'capitalize',
    '& .MuiTypography-root': {
        fontFamily: "'Montserrat' !important",
        fontWeight: '400 !important',
    }
}))

type OnActionVoidHandle = () => void

interface ItemPropsType {
    text: string;
    icon?: React.ReactNode;
    dissableIconAnimation?: boolean;
    dissablePaddingBottom?: boolean;
    active?: boolean;
    solebutton?: boolean;
    mb?: number;
    onAction?: OnActionVoidHandle;
    onMenuClose?: OnActionVoidHandle;
}

const ComponentItem = ({ text, icon, dissableIconAnimation=false, dissablePaddingBottom=false, solebutton=false, active=false, mb, onAction, onMenuClose }:ItemPropsType) => {
    return (
        <CustomMenuItem onClickCapture={() => { onMenuClose?.() }} onClick={() => { onAction?.() }} solebutton={solebutton} dissableIconAnimation={dissableIconAnimation} dissablePaddingBottom={dissablePaddingBottom} active={active} sx={{ background: 'transparent !important', ...(mb && { marginBottom: `${mb}px` }) }} disableRipple>
            {icon && (
                <ListItemIcon className='icon-object'>
                    {icon}
                </ListItemIcon>
            )}
          <Text>{text}</Text>
        </CustomMenuItem>
    )
}

export default ComponentItem