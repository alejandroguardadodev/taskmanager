import { styled } from '@mui/system'

import WorkspaceSection from './WorkspaceSection'

import TestTable from '../../components/tables/TestTable'

const Container = styled("article")(() => ({
  width: '100%',
  maxWidth: '1500px',
  paddingTop: '20px',
}))

const HomePage = () => {
  

  return (
    <Container>
      <WorkspaceSection maxwidth={1500} />
      <TestTable />
    </Container>
  )
}

export default HomePage