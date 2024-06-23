import React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

interface WorkspaceCardPropsType {
    width: number;
}

const WorkspaceCard = ({ width }:WorkspaceCardPropsType) => {
  return (
    <Card sx={{ maxWidth: `${width}px` }}>
        <CardHeader 
            title="Default"
            subheader="Tasks"    
        />
    </Card>
  )
}

export default WorkspaceCard