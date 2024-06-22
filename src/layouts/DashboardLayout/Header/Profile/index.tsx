import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import Tooltip from '@mui/material/Tooltip'

import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

import MnMenu from '../../../../components/MnMenu'

const AvatarIconButton = styled(IconButton)(({ theme }) => ({
    padding: '0px',
    [theme.breakpoints.up("lg")]: {
        marginRight: '15px'
    }
}))

const ProfileAvatar = styled(Stack)(() => ({
    padding: '10px 20px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, .3)'
}))

const Profile = () => {

    const [anchorProfile, setAnchorProfile] = React.useState<null | HTMLElement>(null)

    const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorProfile(event.currentTarget); }
    const handleCloseProfileMenu = () => { setAnchorProfile(null) }

    return (
        <>
            <Tooltip title="Profile Setting">
                <AvatarIconButton onClick={handleOpenProfileMenu}>
                    <Avatar alt="Avatar Profile" sx={{ width: 30, height: 30 }} />
                </AvatarIconButton>
            </Tooltip>

            <MnMenu
                id="profile-menu"
                anchor={anchorProfile}
                onClose={handleCloseProfileMenu}
            >
                <ProfileAvatar>
                    <Avatar sx={{ width: 48, height: 48 }} />
                    <Box sx={{ height: '10px' }} />
                    <Typography variant='body1' className='non-mouse-event'>@Alexanderlguard</Typography>
                    <Typography variant='body1' className='non-mouse-event'>alexanderlguard@gmail.com</Typography>
                </ProfileAvatar>
            </MnMenu>
        </>
    )
}

export default Profile