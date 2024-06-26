import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import WorkspaceCard from '../../../components/cards/WorkspaceCard'

import useResizePage from '../../../hooks/useResizePage'
import useResponsive from '../../../hooks/useResponsive'

const CardsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    scrollSnapAlign: 'start',
    [theme.breakpoints.down('sm')]: {
      //
    }
}))

const ArticleContainer = styled("section", {
  shouldForwardProp: (props) => props !== "containerwidth"
})<{ containerwidth: number; }>(({ containerwidth }) => ({
  padding: '0px',
  margin: '0px',
  width: `${containerwidth}px`,
  display: 'flex',
  position: 'relative',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}))

const DEFAULT_CARD_WIDTH = 240

const WorkspaceSection = () => {

  const { isMobile } = useResponsive()

  const { pagewidth } = useResizePage(true)  

  const cardwidth = React.useMemo<number>(() => {
    if (isMobile && pagewidth) return pagewidth / 2
    
    return DEFAULT_CARD_WIDTH
  }, [isMobile, pagewidth])

  return (
    <ArticleContainer containerwidth={pagewidth}>
      <CardsContainer>
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
        <WorkspaceCard width={cardwidth} />
      </CardsContainer>
    </ArticleContainer>
  )
}

export default WorkspaceSection