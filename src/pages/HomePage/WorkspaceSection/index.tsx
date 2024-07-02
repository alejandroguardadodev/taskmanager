import React from 'react'

import Carrousel from '../../../components/Carrousel'
import WorkspaceCard from '../../../components/cards/WorkspaceCard'

import useResizePage from '../../../hooks/useResizePage'
import useResponsive from '../../../hooks/useResponsive'

interface WorkspaceSectionPropsType {
  maxwidth: number;
}

const WorkspaceSection = ({ maxwidth }:WorkspaceSectionPropsType) => {

  const { pagewidth } = useResizePage(true)  
  
  const { isMobile, isTablet } = useResponsive()

  const numbersPerCards = React.useMemo<number>(() => {
    if (isMobile) return 1
    else if (isTablet) return 3

    return 6
  }, [isMobile, isTablet])

  return (
    <Carrousel 
      width={pagewidth} 
      maxwidth={maxwidth} 
      cardsbyview={numbersPerCards}
      data={[0, 1, 2]}
      onRegisterCard={(id:number, width:number) => (<WorkspaceCard key={`workspace-card-${id}`} width={width} />)}
    />
  )
}

export default WorkspaceSection