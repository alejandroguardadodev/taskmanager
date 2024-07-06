import React from 'react'

import { styled } from '@mui/system'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

import FormRow from './FormRow'

import Chip from '@mui/material/Chip'

import { ITblCell, ITblKeyValue } from '../../../../models/Table'

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

interface InputStyleType {
    id: string;
    decoration: ITblKeyValue[];
}

interface MousePositionType {
    x: number;
    y: number;
}

interface MenuItemType {
    title: string;
    icon?: React.ReactNode;
}

interface InputCellType {
    id: string;
    type: 'text' | "select";
    onSubmit?: (data:unknown) => void;
}

interface BaseRowPropsType {
    data: ITblCell[];
    action?: null | React.ReactNode;
    items?: null | MenuItemType[];
    hidefileds?: string[]
    starticon?: null | React.ReactNode;
    inputcells?: InputCellType[];
    inputStyle?: InputStyleType[];
}

const BaseRow = ({ data, action=null, starticon=null, items=null, hidefileds=[], inputcells=[], inputStyle=[] }:BaseRowPropsType) => {

    const cellRef = React.useRef<HTMLTableCellElement>(null);

    const [mousePosition, setMousePosition] = React.useState<null | MousePositionType>(null)
    const [fieldasinput, setFiledAsInput] = React.useState<null | InputCellType>(null)
    
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

    const handleOutsideClick = (e:MouseEvent) => {
        
        if (!fieldasinput) return

        if (cellRef.current && !cellRef.current.contains(e.target as Node)) {
            setFiledAsInput(null)
        }
    }

    const WriteContent = (column:ITblCell):React.ReactNode => {
        const stylecolumn = inputStyle.find((style) => style.id == column.key)

        const decoration = stylecolumn?.decoration.find((label) => label.key == column.value)

        if (stylecolumn) return (<Chip 
            sx={{
                background: decoration?.style.background,
                color: decoration?.style.color,
                fontWeight: decoration?.style.fontWeight,
                fontSize: decoration?.style.fontSize,
            }} 
            label={column.value} 
        />)

        return column.value
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

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
                        ref={(fieldasinput && fieldasinput.id == column.key)? cellRef : null}
                        sx={{ 
                            textTransform: 'capitalize',
                            ...(column.maxWidth && {
                                width: `${column.maxWidth}px`
                            }),
                            ...(fieldasinput && fieldasinput.id == column.key && {
                                paddingLeft: '10px',
                            })
                        }}
                        align="left"
                        onDoubleClick={() => {
                            const field = inputcells.find((head) => head.id == column.key)

                            if (field) 
                                setFiledAsInput(field)
                        }}
                    >
                        {fieldasinput && fieldasinput.id == column.key && (
                            <FormRow id={'data'} title={column.key} onSubmit={fieldasinput.onSubmit} type={fieldasinput.type} defaultValue={column.value} />
                        )}

                        {(!fieldasinput || fieldasinput.id !== column.key) && index == 0 && starticon}
                        {(!fieldasinput || fieldasinput.id !== column.key) && WriteContent(column)}
                        
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