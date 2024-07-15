import React from 'react'

import { styled } from '@mui/system'

import { useFormContext } from "react-hook-form"

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import Tooltip from '@mui/material/Tooltip'

import DateField from './DateField'
import TimeField from './TimeField'
import SelectField from './SelectField'

import IconButton from '@mui/material/IconButton'

import NearbyErrorIcon from '@mui/icons-material/NearbyError'
import { DateObject } from 'react-multi-date-picker'

const FieldContainer = styled(Stack)(() => ({
    width: '100%' , 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4px',
    marginBottom: '10px',
}))

const InputContainer = styled(Stack, {
    shouldForwardProp: (props) => props !== "borderColor" && props !== 'isInside'
})<{ isInside:boolean; }>(({ borderColor, isInside }) => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%' , 
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    transition: 'box-shadow .2s ease-in-out, border .2s ease-in-out',
    ...(isInside && {
        '& .input-component': {
            padding: '5px'
        }
    })
}))

const NomalInput = styled('input')(() => ({
    fontFamily: '"Montserrat" !important',
    fontSize: '.9rem',
    fontWeight: '400',
    flexGrow: '1',
    padding: '8px 5px 8px 10px',
    background: 'transparent',
    border: 'none !important',
    outline: 'none !important',
}))

const NomalTextArea = styled('textarea')(() => ({
    fontFamily: '"Montserrat" !important',
    fontSize: '.9rem',
    fontWeight: '400',
    flexGrow: '1',
    padding: '8px 5px 8px 10px',
    background: 'transparent',
    border: 'none !important',
    outline: 'none !important',
    resize: 'none',
}))

interface KeyValue {
    id: number | string;
    name: string;
}

interface MkInputPropsType {
    id: string;
    title?: string;
    defaultvalue?: number | string | Date | DateObject;
    disabled?: boolean;
    type?: "text" | "number" | "textarea" | "select" | "date" | "time" | "password";
    placeholder?: string,
    insideInput?: boolean;
    endIcon?: null | React.ReactNode;
    mindate?: Date;
    maxdate?: Date;
    onEndIconClick?: () => void;
    values?: KeyValue[];
}

const MkInput = ({ id, title="", mindate, maxdate, defaultvalue="", disabled=false, type="text", placeholder="", insideInput=false, endIcon=null, values=[], onEndIconClick }:MkInputPropsType) => {

    const [fieldvalue, setFieldvalue] = React.useState<number | string | Date | DateObject>(defaultvalue)

    const { register, setValue, watch, formState: { errors } } = useFormContext() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isErr = React.useMemo(() => !!errors[id], [ errors, errors[id], id ])
    const errMessage = React.useMemo(():string => isErr? `${errors[id]!.message}` : '', [isErr, errors, id])

    const inputContainerBoderColor = React.useMemo<string>(() => {
        if (insideInput) return "transparent"

        if (isErr) return '#400101'

        return "#206C65"
    }, [insideInput, isErr])

    React.useEffect(() => {
        const subscription = watch((value) => {
            if (value) {
                if (typeof value[id] === 'number') setFieldvalue(parseInt(value[id] || "0"))
                else setFieldvalue(value[id])
            }      
        })
        return () => subscription.unsubscribe()
    }, [watch, id, setFieldvalue])

    const InputElement = React.useMemo<React.ReactNode>(() => {

        switch(type) {

            case "select": 
                return (<SelectField id={id} value={fieldvalue} setValue={setValue} disabled={disabled} values={values} />)

            case "time":
                return (<TimeField id={id} disabled={disabled} placeholder={placeholder} setValue={setValue} value={`${fieldvalue}`} />)

            case "date": 
                return (<DateField id={id} disabled={disabled} placeholder={placeholder} setValue={setValue} value={fieldvalue} mindate={mindate} maxdate={maxdate} />)

            case "textarea":
                return (<NomalTextArea className='input-component' id={`input-${id}`} rows={4} cols={50} disabled={disabled} placeholder={placeholder} {...register(id)} />)

            default:
                return (<NomalInput autoFocus={insideInput} className='input-component' id={`input-${id}`} disabled={disabled} type={type} placeholder={placeholder} {...register(id)} />)
        }

    }, [type, id, disabled, setValue, fieldvalue, mindate, maxdate, register, placeholder, values, insideInput])
    
    return (
        <FieldContainer sx={{ ...(insideInput && { padding: '0px !important', margin: '0px !important' }) }}>
            {title && !insideInput && (
                <label htmlFor={`input-${id}`}>
                    <Typography variant='subtitle1' component="p">{title}</Typography>
                </label>
            )}
            <InputContainer borderColor={inputContainerBoderColor} isInside={insideInput}>
                {insideInput && isErr && (
                    <Tooltip title={`${title} ${errMessage}`.trim()} arrow>
                        <NearbyErrorIcon sx={{ color: '#400101', fontSize: '.9rem' }} />
                    </Tooltip>
                )}
                {InputElement}
                {!insideInput && endIcon && (type === "text" || type === "number" || type == "time") && (<IconButton onClick={() => { onEndIconClick?.() }} disableRipple>{endIcon}</IconButton>)}
            </InputContainer>
            {isErr && !insideInput && (
                <Typography variant="caption" component="p" sx={{ color: '#400101', fontStyle: 'italic' }}>{errMessage}</Typography>
            )}
        </FieldContainer>
    )
}

export default MkInput