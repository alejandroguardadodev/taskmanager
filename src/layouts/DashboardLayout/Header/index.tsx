import { styled } from '@mui/system'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Profile from './Profile'

const HeaderToolBar = styled(Toolbar)(({ theme }) => ({
    padding: '0px 10px',
    minHeight: '48px !important',
    background: 'transparent !important',
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    [theme.breakpoints.down("lg")]: {
        padding: '0px 5%',
    }
}))

type OnActionHandle = () => void

interface HeaderPropsType {
    title: string;
    onToogleMenu: OnActionHandle;
}

const Header = ({ title, onToogleMenu }:HeaderPropsType) => {
    return (
        <AppBar elevation={0} position="static" sx={{background: 'transparent !important'}}>
            <HeaderToolBar disableGutters>
                <IconButton onClick={() => onToogleMenu()} sx={{ mr: 2 }} disableRipple> <MenuIcon /> </IconButton>
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" className='non-mouse-event'>{title}</Typography>
                    <Profile />
                </Stack>
            </HeaderToolBar>
        </AppBar>
    )
}

export default Header