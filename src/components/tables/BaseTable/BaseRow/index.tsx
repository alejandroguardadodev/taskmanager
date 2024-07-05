import React from 'react'

import { styled } from '@mui/system'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

import { ITblCell } from '../../../../models/Table'

const MenuListItemIcon = styled(ListItemIcon)(() => ({
    '& svg': {
        fontSize: '1.2rem',
        color: 'rgba(0, 0, 0, .5) !important'
    } 
}))

const MenuListItemText = styled(ListItemText)(() => ({
    fontSize: '1rem',
    color: 'black !important'
}))

const CustomCell = styled(TableCell)(() => ({
    padding: '6px 0px'
}))

interface MousePositionType {
    x: number;
    y: number;
}

interface MenuItemType {
    title: string;
    icon?: React.ReactNode;
}

interface BaseRowPropsType {
    data: ITblCell[];
    action?: null | React.ReactNode;
    items?: null | MenuItemType[];
    hidefileds?: string[]
    starticon?: null | React.ReactNode;
}

const BaseRow = ({ data, action=null, starticon=null, items=null, hidefileds=[] }:BaseRowPropsType) => {

    const [mousePosition, setMousePosition] = React.useState<null | MousePositionType>(null)
    
    const openSubMenu = React.useMemo(() => Boolean(mousePosition), [mousePosition])

    const useMenu = React.useMemo(() => Boolean(items), [items])

    const subMenuRealPosition = React.useMemo<MousePositionType>(() => {
        if (!openSubMenu) return { x:0, y:0 }
        if (!mousePosition) return { x: 0, y: 0 }

        return {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }, [openSubMenu, mousePosition])

    const handleSubMenuClose = () => { setMousePosition(null); }

    return (
        <>
            <TableRow
                hover
                tabIndex={-1}
                sx={{ cursor: 'pointer' }}
                //onDoubleClick={handleOpenSubMenu}
                onContextMenu={(event) => {
                    if (!useMenu) return;

                    event.preventDefault()
                    
                    if (!openSubMenu) {
                        setMousePosition({
                            x: event.clientX,
                            y: event.clientY,
                        })
                    }
                }}
                >

                {data.filter((column) => !hidefileds.includes(column.key)).map((column, index) => (
                    <CustomCell  
                        key={`col-${column.key}-${index}`}
                        sx={{ 
                            textTransform: 'capitalize',
                            ...(column.maxWidth && {
                                width: `${column.maxWidth}px`
                            })
                        }}
                        align="left"
                    >
                        {index == 0 && starticon}
                        {column.value}
                    </CustomCell>
                ))}

                {action && (
                    <CustomCell  
                        sx={{ 
                            textTransform: 'capitalize',
                            width: '20px',
                        }}
                        align="left"
                    >
                        {action}
                    </CustomCell>
                )}
            </TableRow>

            <Menu
                open={openSubMenu}
                onClose={handleSubMenuClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                anchorReference="anchorPosition"
                anchorPosition={{ top: subMenuRealPosition.y, left: subMenuRealPosition.x }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                 <MenuList sx={{ padding: '0px !important' }}>

                    {items && items.map((item, index) => (
                        <MenuItem key={`item-${index}`} onClickCapture={handleSubMenuClose}>
                            {item.icon && (
                                <MenuListItemIcon>
                                    {item.icon}
                                </MenuListItemIcon>
                            )}
                            <MenuListItemText>{ item.title }</MenuListItemText>
                        </MenuItem>
                    ))}
                 </MenuList>
            </Menu>
        </>
    )
}

export default BaseRow