import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import WorkspaceCard from '../../../components/cards/WorkspaceCard'

import IconButton from '@mui/material/IconButton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import useResizePage from '../../../hooks/useResizePage'
import useResponsive from '../../../hooks/useResponsive'

const CardsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    scrollSnapAlign: 'start',
    transition: 'margin-left .2s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      //
    }
}))

const ArticleCarrouselContainer = styled("section", {
  shouldForwardProp: (props) => props !== "containerwidth"
})<{ containerwidth: number; }>(({ containerwidth }) => ({
  padding: '0px',
  margin: '0px',
  width: `${containerwidth}px`,
  display: 'flex',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  mask: 'linear-gradient(90deg, rgba(255,255,255,1) 95%, rgba(255,255,255,0) 100%)',
}))

const ArticleContainer = styled("section", {
  shouldForwardProp: (props) => props !== "containerwidth"
})<{ containerwidth: number; }>(({ containerwidth }) => ({
  padding: '0px',
  margin: '0px',
  width: `${containerwidth}px`,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  '&:hover': {
    '& .float-button-action': {
      top: '50%',
      opacity: 1,
    }
  }
}))

const FloatButton = styled(IconButton)(() => ({
  color: 'white',
  background: '#127369 !important',
  position: 'absolute',
  top: '130%',
  width: '30px',
  height: '30px',
  transform: 'translate(0px, -50%)',
  transition: 'top .15s ease-in-out, opacity .15s ease-in-out',
  opacity: 0,
  '& svg': {
    fontSize: '1.2rem',
  }
}))

const DEFAULT_CARD_WIDTH = 240
const PADDING_HORIZONTAL = 15
const card_leghts = 7

interface WorkspaceSectionPropsType {
  maxwidth?: number;
}

const WorkspaceSection = ({ maxwidth }:WorkspaceSectionPropsType) => {

  const { isMobile } = useResponsive()

  const { pagewidth } = useResizePage(true)  

  const [marginleft, setMarginLeft] = React.useState<number>(0)

  const articlecontainerwidth = React.useMemo<number>(() => {
    if (maxwidth && pagewidth > maxwidth) return maxwidth

    return pagewidth
  }, [maxwidth, pagewidth])

  const carrouselcontainerwidth = React.useMemo<number>(() => {
    return articlecontainerwidth - (PADDING_HORIZONTAL * 2)
  }, [articlecontainerwidth])

  const cardwidth = React.useMemo<number>(() => {
    if (isMobile) return carrouselcontainerwidth / 2
    
    return DEFAULT_CARD_WIDTH
  }, [isMobile, carrouselcontainerwidth])

  const LeftMoveAction = () => {
    setMarginLeft( (marginleft - cardwidth) )
  }

  const RightMoveAction = () => {
    if (marginleft < 0) setMarginLeft( (marginleft + cardwidth) )
  }

  React.useEffect(() => {
    setMarginLeft(0)
  }, [])

  return (
    <ArticleContainer containerwidth={articlecontainerwidth}>
      <ArticleCarrouselContainer containerwidth={carrouselcontainerwidth}>
        <CardsContainer sx={{ marginLeft: `${marginleft}px` }}>
          {[...Array(card_leghts).keys()].map((_, index) => (<WorkspaceCard key={`workspace-card-${index}`} width={cardwidth} />))}
        </CardsContainer>
      </ArticleCarrouselContainer>
      <FloatButton onClick={LeftMoveAction} sx={{ left: 0 }} className='float-button-action'>
          <ArrowLeftIcon />
      </FloatButton>

      <FloatButton onClick={RightMoveAction} sx={{ right: 0 }} className='float-button-action'>
        <ArrowRightIcon />
      </FloatButton>
    </ArticleContainer>
  )
}

export default WorkspaceSection