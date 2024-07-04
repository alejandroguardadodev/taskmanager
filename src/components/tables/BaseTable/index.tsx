import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Paper from '@mui/material/Paper'

import TableContainer from '@mui/material/TableContainer' 
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'

import EnhancedTableHead from './EnhancedTableHead'

import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import BaseRow from './BaseRow'

import { ITblHead, ITblCell } from '../../../models/Table'

import useResponsive from '../../../hooks/useResponsive'

type handleVoidAction = () => void

type handleReader = (row: unknown) => null | ITblCell[]

interface MenuItemType {
    title: string;
    icon?: React.ReactNode;
}

interface BaseTablePropsType {
    header: ITblHead[];
    data?: unknown[];
    reader?: handleReader;
    addButtonText?: string;
    onAddButton?: handleVoidAction;
    maxHeight?: number;
    actionSection?: (row: unknown) => React.ReactNode;
    submenuitems?: null | MenuItemType[];
}

const BaseTable = ({ header, data, reader, submenuitems=null, addButtonText, maxHeight=500, onAddButton, actionSection }:BaseTablePropsType) => {

    const { isMobile } = useResponsive()

    const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
    const [orderBy, setOrderBy] = React.useState<string>('title')


    const handleRequestSort = ( _event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        // #TODO: RELOAD PAGE TABLE
    }

    return (
        <Box 
            sx={{ 
                paddingTop: '10px', 
                paddingBottom: '10px' 
            }}
        >
            <Stack 
                sx={{ 
                    width: '100%', 
                    paddingBottom: '10px', 
                    paddingTop: '5px', 
                    gap: '10px' 
                }} 
                flexDirection="row" 
                justifyContent={isMobile? 'space-between' : 'flex-start'}
            >
                {addButtonText && (<Button 
                    sx={{ 
                        textTransform: 'capitalize !important' 
                    }} 
                    variant='outlined' 
                    startIcon={<AddCircleIcon />} 
                    onClick={() => { onAddButton?.() }}
                >
                    {addButtonText}
                </Button>)}
            </Stack>

            <Paper 
                sx={{ 
                    width: '100%', 
                    mb: 2, 
                    background: 'transparent', 
                    boxShadow: 'none !important' 
                }}
            >
                <TableContainer sx={{ maxHeight: `${maxHeight}px` }}>
                    <Table 
                        size='medium'
                        stickyHeader 
                    >
                        <EnhancedTableHead 
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort} 
                            header={header}
                            showAction={!!actionSection}
                        />
                        <TableBody>
                            {data && reader && data.map((row, index) => {
                                const _row = reader(row)

                                if (!_row) return null;

                                return <BaseRow
                                    key={`row-${index}`}
                                    data={_row}
                                    action={actionSection && actionSection(row)}
                                    items={submenuitems}
                                />
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default BaseTable