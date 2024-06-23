import React from 'react'

import { styled } from '@mui/system'

import WorkspaceCard from '../../../components/cards/WorkspaceCard'

const ArticleContainer = styled("section")(() => ({
    width: '100%',

}))

const WorkspaceSection = () => {
  return (
    <ArticleContainer>
        <WorkspaceCard width={200} />
    </ArticleContainer>
  )
}

export default WorkspaceSection