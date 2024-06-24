import { styled } from '@mui/system'

import WorkspaceSection from './WorkspaceSection'


const Container = styled("article")(() => ({
  width: '100%',
  maxWidth: '1500px',
  paddingTop: '20px',
}))

const HomePage = () => {
  return (
    <Container>
      <WorkspaceSection />
    </Container>
  )
}

export default HomePage