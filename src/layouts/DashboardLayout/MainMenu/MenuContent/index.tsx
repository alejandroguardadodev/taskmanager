import { styled } from '@mui/system'

import { useMemo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'

import ComponentItem from '../../../../components/ComponentItem'

import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import HomeIcon from '@mui/icons-material/Home'
import FaceIcon from '@mui/icons-material/Face'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import StoreIcon from '@mui/icons-material/Store'

import Divider from '@mui/material/Divider'

import useResponsive from '../../../../hooks/useResponsive'
import useModal from '../../../../hooks/useModal'

const Container = styled("div")(() => ({
  padding: '20px 0px',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  //paddingTop: '5px'
}))

type OnActionHandle = () => void

interface MenuContentPropsType {
    onMenuClose?: OnActionHandle;
}

const MenuContent = ({ onMenuClose }:MenuContentPropsType) => {

  const navigate = useNavigate()
  const location = useLocation()

  const { isTabletOrMobile } = useResponsive()

  const { openModal:openTaskModal } = useModal('task')
  const { openModal:openTestModal } = useModal('test')

  const currentPath = useMemo(() => location.pathname.replace("/", ""), [location.pathname])

  const handleCloseMenu = () => {
    if (isTabletOrMobile) onMenuClose?.()
  }

  return (
    <Container>
      {isTabletOrMobile && (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            padding: '0px 5%',
            marginBottom: '10px',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: '5%',
            }}

            onClick={() => { onMenuClose?.() }}
          >
            <CloseIcon />
          </IconButton>
          
          <Typography variant='h5' sx={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px' }}>Moonnuit</Typography>
          <Typography variant='h5' sx={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px', marginTop: '-10px' }}>Manager</Typography>
          <Divider sx={{ marginBottom: '10px', background: 'rgba(0, 0, 0, .4)', marginTop: '10px' }} />
        </Box>
      )}

      {/* <Button 
        startIcon={<AddCircleIcon />} 
        sx={{ width: '90%', marginBottom: '10px' }}
        variant='outlined' 
        onClickCapture={() => { handleCloseMenu() }}
        onClick={()=>{ openTaskModal() }}
      >New Kid</Button> */}
      
      <ComponentItem 
        icon={<HomeIcon />}
        text='Home'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        active={currentPath == ""}
        mb={5}
        onMenuClose={handleCloseMenu}
        onAction={() => { navigate("/") }}
      />

      <ComponentItem 
        icon={<FaceIcon />}
        text='Kids'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        active={currentPath == "kids"}
        mb={5}
        onMenuClose={handleCloseMenu}
        onAction={() => { navigate("/kids") }}
      />

      <ComponentItem 
        icon={<SupervisedUserCircleIcon />}
        text='Day Cares'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        active={currentPath == "daycares"}
        mb={5}
        onMenuClose={handleCloseMenu}
        onAction={() => { navigate("/daycares") }}
      />

      <ComponentItem 
        icon={<EscalatorWarningIcon />}
        text='Guardians'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        mb={5}
        onMenuClose={handleCloseMenu}
        onAction={() => { navigate("/") }}
      />

      {/* <ItemContent
        id="workspace-action"
        title="Groups"
        onMenuClose={handleCloseMenu}
      >
        <ComponentItem 
          icon={<FamilyRestroomIcon />}
          text='Groups'
          onMenuClose={handleCloseMenu}
        />
        <ComponentItem 
          icon={<WorkIcon />}
          text='Guardians'
          onMenuClose={handleCloseMenu}
        />
      </ItemContent> */}

      <ComponentItem 
        icon={<StoreIcon />}
        text='Store'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        mb={5}
        onMenuClose={handleCloseMenu}
        onAction={() => { navigate("/") }}
      />
    </Container>
  )
}

export default MenuContent