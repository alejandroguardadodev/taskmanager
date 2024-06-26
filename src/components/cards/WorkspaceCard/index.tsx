import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import WorkIcon from '@mui/icons-material/Work'

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

const CardBox = styled(Box,{
  shouldForwardProp: (props) => props !== "cardwidth"
})<{ cardwidth: number; }>(({ theme, cardwidth }) => ({
  width: `${cardwidth}px`, 
  maxWidth: `${cardwidth}px`, 
  padding: '10px 10px',
  paddingBottom: '15px',
  background: 'transparent !important', 
  [theme.breakpoints.down('sm')]: {
    boxSizing: 'border-box',
  },
}))

const CardBody = styled(Card)(() => ({
  width: '100%', 
  padding: '10px 0px', 
  boxSizing: 'border-box', 
  background: 'transparent',//'#D5EAF2', 
  border: '1px solid #594011',
  cursor: 'pointer',
  borderRadius: '5px',
  '& .stack-card-title': {
    transition: 'padding .2s ease-in-out',
  },
  '&:hover': {
    boxShadow: '0px 5px 20px -12px rgba(0,0,0,0.75)',
    '& .stack-card-title': {
      paddingLeft: '3px',
    }
  },
}))

interface WorkspaceCardPropsType {
    width: number;
}

const WorkspaceCard = ({ width }:WorkspaceCardPropsType) => {
  React.useEffect(() => {console.log('Card Width:', width)}, [width])

  return (
    <CardBox cardwidth={width} >
      <CardBody elevation={0} >
        <CardContent>
          <Stack className='stack-card-title' flexDirection="row" alignItems="center">
            <WorkIcon sx={{ color: '#594011', fontSize: '.9rem', marginRight: '4px' }} />
            <Typography variant='h5' sx={{ flexGrow: 1, color: '#594011' }}>Default</Typography>
          </Stack>
          <Typography variant='body1' sx={{ color: '#594011' }}>Default</Typography>
        </CardContent>
      </CardBody>
    </CardBox>
  )
}

export default WorkspaceCard