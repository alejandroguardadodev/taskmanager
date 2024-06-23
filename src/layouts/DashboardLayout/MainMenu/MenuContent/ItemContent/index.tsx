import React from 'react'

import Accordion from '@mui/material/Accordion'

import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Button from '@mui/material/Button'

import MenuList from '@mui/material/MenuList'

import AddCircleIcon from '@mui/icons-material/AddCircle'

type OnActionVoidType = () => void

interface ItemContentPropsTypes {
  id: string;
  title: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  btntext?: string;
  onAction?: OnActionVoidType;
}

const ItemContent = ({ id, title, defaultExpanded=false, children, btntext, onAction }:ItemContentPropsTypes) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      elevation={0}
      sx={{
        background: 'transparent',
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${id}`}
        id={id}
        sx={{
          flexDirection: "row-reverse !important",
          gap: '10px',
          borderBottom: '1px solid rgba(0, 0, 0, .2)',
          minHeight: '48px !important',
          height: '48px !important',
        }}
      >
        { title }
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {btntext && (<Button onClick={() => { onAction?.() }} startIcon={<AddCircleIcon />} variant='outlined'> {btntext} </Button>)}
        <MenuList dense>
          {children}
        </MenuList>
      </AccordionDetails>
    </Accordion>
  )
}

export default ItemContent
