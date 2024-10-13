import { useMemo } from 'react'

import { useOutletContext } from 'react-router-dom'

import WorkspaceSection from './WorkspaceSection'

import TestTable from '../../components/tables/TestTable'

// import TestForm from '../../components/forms/TestForm'

import HeaderTitle from '../../components/Titles/HeaderTitle'

const CONTAINER_PADDING_VERTICAL = 20

const HomePage = () => {
  
  const [isMenuOpen, containerWidth] = useOutletContext<[boolean, number]>()

  const workspaceSectionWdith = useMemo<number>(() => {
    if (!containerWidth) 
      return 1400 - (isMenuOpen? CONTAINER_PADDING_VERTICAL : 0)
    
    return containerWidth - (isMenuOpen? CONTAINER_PADDING_VERTICAL : 0)
  }, [])

  return (
    <>
      <HeaderTitle title='Day Cares' />
      <WorkspaceSection maxwidth={workspaceSectionWdith} />
      <HeaderTitle title='Kids' marginTop={20} />
      {/* <TestForm /> */}
      <TestTable />
    </>
  )
}

export default HomePage