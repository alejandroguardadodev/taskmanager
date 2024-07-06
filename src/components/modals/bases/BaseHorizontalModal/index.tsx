import { styled } from '@mui/system'

import Drawer from '@mui/material/Drawer'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import Divider from '@mui/material/Divider'

import useModal from '../../../../hooks/useModal'

import { ModalTitleType } from '../../../../reducers/modalReducer'

const BoxContainer = styled(Box)(({ theme }) => ({
    width: 550,
    height: '100%',
    background: 'transparent !important',
    padding: '20px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        width: '100vw',
    }
}))

interface BaseHorizontalModalPropsType {
    title: ModalTitleType;
    children: React.ReactNode;
    header?: string;
}

const BaseHorizontalModal = ({ title, children, header="" }:BaseHorizontalModalPropsType) => {
    
    const { open, closeModal } = useModal(title)

    return (
        <Drawer anchor="right" open={open} onClose={() => { closeModal(); }}>
            <BoxContainer role="presentation">
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '5px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Typography variant='h5' className='non-mouse-event' sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', textTransform: 'capitalize'  }}>{header}:</Typography>
                    </Box>
                    <IconButton aria-label="close-modal" onClick={() => { closeModal(); }}>
                        <CloseIcon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                </Box>
                <Divider sx={{ marginBottom: '10px' }} />
                <Box sx={{ flexGrow: 1 }}>
                    {children}
                </Box>
            </BoxContainer>
        </Drawer>
    )
}

export default BaseHorizontalModal