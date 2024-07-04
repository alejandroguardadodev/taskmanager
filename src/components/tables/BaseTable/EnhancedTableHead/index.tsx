import React from 'react'

import Box from '@mui/material/Box'

import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'

import { visuallyHidden } from '@mui/utils'

import { ITblHead } from '../../../../models/Table'

type Order = 'asc' | 'desc';

interface EnhancedTableHeadPropsType {
    header: ITblHead[];
    order: Order;
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    showAction?: boolean;
}

const EnhancedTableHead = ({header, order, orderBy, onRequestSort, showAction=false }:EnhancedTableHeadPropsType) => {

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => { onRequestSort(event, property); }

    return (
        <TableHead>
            <TableRow>
                {header.map((head) => (
                    <TableCell
                        key={head.id}
                        align="left"
                        padding='none'
                        sortDirection={orderBy === head.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === head.id}
                            direction={orderBy === head.id ? order : 'asc'}
                            onClick={createSortHandler(head.id)}
                        >
                            {head.label}
                            {orderBy === head.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                {showAction && (<TableCell></TableCell>)}
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead