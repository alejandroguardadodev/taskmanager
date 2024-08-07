import * as yup from "yup"

import React from 'react'

import { styled } from '@mui/system'

import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Box from "@mui/material/Box"

import MkInput from "../../../../MkInput"

import { InlineSchema } from "../../../../../schemas"

type SchemaType = yup.InferType<typeof InlineSchema>

const Form = styled('form')(() => ({
    width: '100%',
    padding: '1px 0px',
    margin: '0px',
}))

interface FormRowPropsType {
    id: string;
    type: 'text' | 'select';
    title: string;
    defaultValue?: string;
    onSubmit?: (data:unknown) => void;
}

const FormRow = ({ id, type, title, defaultValue="", onSubmit }:FormRowPropsType) => {

    const methods = useForm<SchemaType>({
        defaultValues: {
            data: defaultValue,
        },
        resolver: yupResolver(InlineSchema), 
        mode: "onChange"
    });

    const onFormSubmit = (data:SchemaType) => {
        onSubmit?.(data.data)
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onFormSubmit)}>
                <Box sx={{ width: '100%' }}>
                    <MkInput id={id} title={title} type={type} defaultvalue={defaultValue} insideInput/>
                </Box>
            </Form>
        </FormProvider>
    )
}

export default FormRow