import { styled } from '@mui/system'

import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'

import ItemContent from './ItemContent'
import ComponentItem from '../../../../components/ComponentItem'

import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'
import WorkIcon from '@mui/icons-material/Work'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import ArticleIcon from '@mui/icons-material/Article'

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

  const { isTabletOrMobile } = useResponsive()

  const { openModal:openTaskModal } = useModal('task')
  const { openModal:openTestModal } = useModal('test')

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

      <Button 
        startIcon={<AddCircleIcon />} 
        sx={{ width: '90%', marginBottom: '10px' }}
        variant='outlined' 
        onClickCapture={() => { handleCloseMenu() }}
        onClick={()=>{ openTaskModal() }}
      >Task</Button>

      <ComponentItem 
          icon={<HomeIcon />}
          text='Home'
          dissableIconAnimation
          dissablePaddingBottom
          solebutton
          mb={5}
          onMenuClose={handleCloseMenu}
          onAction={() => { navigate("/") }}
        />

      <ComponentItem 
          icon={<SearchIcon />}
          text='Search'
          dissableIconAnimation
          dissablePaddingBottom
          solebutton
          mb={5}
          onMenuClose={handleCloseMenu}
        />

      <ItemContent
        id="workspace-action"
        title="Workspaces"
        btntext='Workspace'
        onAction={() => { openTestModal() }}
        onMenuClose={handleCloseMenu}
      >
        <ComponentItem 
          icon={<WorkIcon />}
          text='Default'
          onMenuClose={handleCloseMenu}
        />
        <ComponentItem 
          icon={<WorkIcon />}
          text='Default'
          onMenuClose={handleCloseMenu}
        />
      </ItemContent>

      <ComponentItem 
        icon={<ContactPhoneIcon />}
        text='Contacts'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        mb={5}
        onMenuClose={handleCloseMenu}
      />

      <ComponentItem 
        icon={<ArticleIcon />}
        text='Resumes'
        dissableIconAnimation
        dissablePaddingBottom
        solebutton
        mb={5}
        onMenuClose={handleCloseMenu}
      />
    </Container>
  )
}

export default MenuContent