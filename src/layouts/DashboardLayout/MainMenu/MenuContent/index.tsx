import { styled } from '@mui/system'

import ItemContent from './ItemContent'
import ComponentItem from '../../../../components/ComponentItem'

import Button from '@mui/material/Button'

import WorkIcon from '@mui/icons-material/Work'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import AddCircleIcon from '@mui/icons-material/AddCircle'

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

const MenuContent = () => {
  return (
    <Container>
      <Button startIcon={<AddCircleIcon />} sx={{ width: '90%', marginBottom: '10px' }} variant='outlined'>Task</Button>

      <ComponentItem 
          icon={<HomeIcon />}
          text='Home'
          dissableIconAnimation
          dissablePaddingBottom
          solebutton
          mb={5}
        />

      <ComponentItem 
          icon={<SearchIcon />}
          text='Search'
          dissableIconAnimation
          dissablePaddingBottom
          solebutton
          mb={5}
        />

      <ItemContent
        id="workspace-action"
        title="Workspaces"
        btntext='Workspace'
        defaultExpanded
      >
        <ComponentItem 
          icon={<WorkIcon />}
          text='Default'
        />
        <ComponentItem 
          icon={<WorkIcon />}
          text='Default'
        />
      </ItemContent>
    </Container>
  )
}

export default MenuContent