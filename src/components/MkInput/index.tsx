import React from 'react'

import { styled } from '@mui/system'

import { useFormContext } from "react-hook-form"

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import Tooltip from '@mui/material/Tooltip'

import IconButton from '@mui/material/IconButton'

import NearbyErrorIcon from '@mui/icons-material/NearbyError'

const FieldContainer = styled(Stack)(() => ({
    width: '100%' , 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4px',
    marginBottom: '20px',
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

interface MkInputPropsType {
    id: string;
    title: string;
    type?: "text" | "number" | "select";
    placeholder?: string,
    insideInput?: boolean;
    endIcon?: null | React.ReactNode;
    onEndIconClick?: () => void;
}

const MkInput = ({ id, title, type="text", placeholder="", insideInput=false, endIcon=null, onEndIconClick }:MkInputPropsType) => {
    
    const { register, setValue, watch, formState: { errors }, trigger } = useFormContext() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isErr = React.useMemo(() => !!errors[id], [ errors, errors[id], id ])
    const errMessage = React.useMemo(():string => isErr? `${errors[id]!.message}` : '', [isErr, errors, id])

    const inputContainerBoderColor = React.useMemo<string>(() => {
        if (insideInput) return "transparent"

        if (isErr) return '#400101'

        return "#206C65"
    }, [insideInput, isErr])

    const InputElement = React.useMemo<React.ReactNode>(() => {

        switch(type) {

            default:
                return (<NomalInput className='input-component' id={`input-${id}`} type={type} placeholder={placeholder} {...register(id)} />)
        }

    }, [type])
    
    return (
        <FieldContainer>
            {title && !insideInput && (
                <label htmlFor={`input-${id}`}>
                    <Typography variant='subtitle1' component="p">{title}</Typography>
                </label>
            )}
            <InputContainer borderColor={inputContainerBoderColor} isInside={insideInput}>
                {insideInput && isErr && (
                    <Tooltip title={errMessage} arrow>
                        <NearbyErrorIcon sx={{ color: '#400101', fontSize: '.9rem' }} />
                    </Tooltip>
                )}
                {InputElement}
                {!insideInput && endIcon && (type === "text" || type === "number") && (<IconButton onClick={() => { onEndIconClick?.() }} disableRipple>{endIcon}</IconButton>)}
            </InputContainer>
            {isErr && !insideInput && (
                <Typography variant="caption" component="p" sx={{ color: '#400101', fontStyle: 'italic' }}>{errMessage}</Typography>
            )}
        </FieldContainer>
    )
}

export default MkInput