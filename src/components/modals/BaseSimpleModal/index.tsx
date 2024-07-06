import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'

import Modal from '@mui/material/Modal'

import Slide from '@mui/material/Slide'

import { ModalTitleType } from '../../../reducers/modalReducer'

import { useResizeDetector } from 'react-resize-detector'

import useResponsive from '../../../hooks/useResponsive'
import useModal from '../../../hooks/useModal'

const ModalBox = styled(Box, {
    shouldForwardProp: (props) => props !== "boxwidth" && props !== "boxheight"
})<{ boxwidth: undefined | number, boxheight: undefined | number }>(({ theme, boxwidth, boxheight }) => ({
    position: 'absolute',
    top: `calc(50% - ${ boxheight?  boxheight / 2 : 100 }px)`,
    left: `calc(50% - ${ boxwidth?  boxwidth / 2 : 100 }px)`,
    maxWidth: 800,
    width: '500px',
    background: 'white',
    boxShadow: '0px 0px 25px -12px rgba(0,0,0,0.75)',
    padding: '20px',
    borderRadius: '5px',
    [theme.breakpoints.down("sm")]: {
        width: '100vw',
        left: '0 !important',
        top: `calc(100% - ${(boxheight? boxheight : 0) + 50}px)`,
        paddingBottom: '50px',
        borderRadius: '0px !important'
    }
}))

interface BaseSimpleModalPropsType {
    title: ModalTitleType;
    children: React.ReactNode;
}

const BaseSimpleModal = ({ title, children } : BaseSimpleModalPropsType) => {

    const { open, closeModal } = useModal(title)
    const { isMobile } = useResponsive()

    const { ref: modalBoxRef, width: modalBoxWidth, height: modalBoxheight  } = useResizeDetector()

    return (
        <Modal
            open={open}
            onClose={() => { closeModal() }}
        >
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <ModalBox ref={modalBoxRef} boxwidth={modalBoxWidth} boxheight={modalBoxheight}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '5px' }}>
                        <Box sx={{ flexGrow: '1' }}>
                            <Typography variant='h5' className='non-mouse-event' sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', textTransform: 'capitalize'  }}>Project:</Typography>
                        </Box>
                        <IconButton aria-label="close-modal" onClick={closeModal}>
                            {isMobile? (<KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />):(<CloseIcon sx={{ fontSize: '1rem' }} />)}
                        </IconButton>
                    </Box>
                    <Divider sx={{ marginBottom: '10px' }} />
                    {children}
                </ModalBox>
            </Slide>
        </Modal>
    )
}

export default BaseSimpleModal