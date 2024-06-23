import { styled } from '@mui/system'

import ItemContent from './ItemContent'
import Item from './Item'

import WorkIcon from '@mui/icons-material/Work'

const Container = styled("div")(() => ({
  padding: '20px 0px',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '5px'
}))

const MenuContent = () => {
  return (
    <Container>
      <ItemContent
        id="workspace-action"
        title="Workspaces"
        btntext='Workspace'
        defaultExpanded
      >
        <Item 
          icon={<WorkIcon />}
          text='Default'
        />
        <Item 
          icon={<WorkIcon />}
          text='Default'
        />
      </ItemContent>
    </Container>
  )
}

export default MenuContent