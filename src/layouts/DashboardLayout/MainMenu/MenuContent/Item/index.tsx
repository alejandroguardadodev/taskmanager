import React from 'react'

import { styled } from '@mui/system'

import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

const CustomMenuItem = styled(MenuItem)(() => ({
    borderBottom: '1px solid rgba(0, 0, 0, 0)',
    marginBottom: '3px',
    transition: 'border .2s ease-in-out',
    '& .icon-object svg': {
        transition: 'transform .2s ease-in-out'
    },
    '&:hover': {
        borderBottom: '1px solid rgba(0, 0, 0, .2)',
        '& .icon-object svg': {
            transform: 'rotate(-25deg)'
        }
    }
}))

const Text = styled(ListItemText)(() => ({
    fontFamily: "'Montserrat'",
    fontWeight: 300,
    fontSize: '.8rem',
    textTransform: 'capitalize',
}))

interface ItemPropsType {
    text: string;
    icon?: React.ReactNode;
}

const Item = ({ text, icon }:ItemPropsType) => {
    return (
        <CustomMenuItem sx={{ background: 'transparent !important' }} disableRipple>
            {icon && (
                <ListItemIcon className='icon-object'>
                    {icon}
                </ListItemIcon>
            )}
          <Text>{text}</Text>
        </CustomMenuItem>
    )
}

export default Item