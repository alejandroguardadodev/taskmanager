import React from 'react'

import Box from '@mui/material/Box'

import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'

import { visuallyHidden } from '@mui/utils'

import { ITblHead } from '../../../../models/Table'

import useResponsive from '../../../../hooks/useResponsive'

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

    const { isMobile, isTablet } = useResponsive()


    const showColumn = React.useCallback((showMobile:boolean, showTablet:boolean) => {
        if (isMobile) return showMobile;
        else if (isTablet) return showTablet;

        return true
    }, [isMobile, isTablet])

    return (
        <TableHead>
            <TableRow>
                
                {header.map((head) => {
                    if (showColumn(head.showMobile, head.showTablet))
                        return <TableCell
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
                    else 
                        return null

                })}
                {showAction && (<TableCell></TableCell>)}
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead