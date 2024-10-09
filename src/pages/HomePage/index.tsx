import { useMemo } from 'react'

import { styled } from '@mui/system'

import { useOutletContext } from 'react-router-dom'
import { useResizeDetector } from 'react-resize-detector'

import WorkspaceSection from './WorkspaceSection'

import TestTable from '../../components/tables/TestTable'

import TestForm from '../../components/forms/TestForm'

import HeaderTitle from '../../components/Titles/HeaderTitle'

const CONTAINER_PADDING_VERTICAL = 20

const Container = styled("article", {
  shouldForwardProp: (props) => props !== "isMenuOpen"
})<{isMenuOpen: boolean}>(({ isMenuOpen }) => ({
  width: '100%',
  maxWidth: '1500px',
  paddingTop: '20px',
  boxSizing: 'border-box',
  transition: 'all .2s ease-in-out',
  ...(isMenuOpen && {
    paddingLeft: `${CONTAINER_PADDING_VERTICAL}px`,
    paddingRight: `${CONTAINER_PADDING_VERTICAL}px`,
  })
}))

const HomePage = () => {
  
  const [isMenuOpen] = useOutletContext<[boolean]>()

  const { ref:containerRef, width:containerWidth } = useResizeDetector()

  const workspaceSectionWdith = useMemo<number>(() => {
    if (!containerWidth) 
      return 1400 - (isMenuOpen? CONTAINER_PADDING_VERTICAL : 0)
    
    return containerWidth - (isMenuOpen? CONTAINER_PADDING_VERTICAL : 0)
  }, [])

  return (
    <Container ref={containerRef} isMenuOpen={isMenuOpen}>
      <HeaderTitle title='Day Cares' />
      <WorkspaceSection maxwidth={workspaceSectionWdith} />
      <HeaderTitle title='Kids' marginTop={20} />
      {/* <TestForm /> */}
      <TestTable />
    </Container>
  )
}

export default HomePage