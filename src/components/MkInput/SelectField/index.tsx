import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { FieldValues, UseFormSetValue } from "react-hook-form"
import { DateObject } from 'react-multi-date-picker'

const SelectBox = styled(Box)(() => ({
    position: 'relative',
    width: '100%', 
    padding: '0px !important',
}))

const SelectElement = styled(Select)(() => ({
    fontFamily: '"Montserrat" !important',
    fontsize: '.9rem',
    fontweight: '400',
    flexgrow: '1',
    padding: '0px',
    background: 'transparent',
    border: 'none !important',
    outline: 'none !important',
    appearance: 'none',
    position: 'relative',
    '& .MuiSelect-select': {
        padding: '9px 5px 10px 10px',
        border: 'none !important',
        outline: 'none !important',
    },
    '& fieldset': {
        padding: '0px',
        border: 'none !important',
        outline: 'none !important',
    }
}))

interface KeyValue {
    id: number | string;
    name: string;
}

interface SelectFieldPropsTypes {
    id: string;
    value: number | string | Date | DateObject;
    setValue: UseFormSetValue<FieldValues>;
    disabled?: boolean;
    values?: KeyValue[];
}

const SelectField = ({ id, value, values=[], disabled=false, setValue }:SelectFieldPropsTypes) => {

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(id, event.target.value, { shouldValidate: true }); 
    };

    return (
        <SelectBox>
            <FormControl sx={{ width: '100%', padding: '0px', margin: '0px' }}>
            <SelectElement 
                    id={`input-${id}`} 
                    sx={{ width: '100%' }}
                    value={value}
                    onChange={(event) => { handleChange(event) }} 
                    MenuProps={{ 
                        sx: { 
                            '& ul': {
                                background: 'white',
                                '& li': {
                                    fontFamily: '"Montserrat" !important',
                                    fontsize: '.9rem',
                                    fontweight: '400',
                                }
                            }
                        }
                    }} 
                    disabled={disabled}
                    displayEmpty
                    className='input-component'
                >
                    {
                        values?.map((value, index) => (
                            <MenuItem key={`select_${index}_${value.id}_${value.name}`} value={value.id}>{value.name}</MenuItem>
                        ))
                    }
                </SelectElement>
            </FormControl>
        </SelectBox>
    )
}

export default SelectField