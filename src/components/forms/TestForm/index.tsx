import React from 'react'
import { styled } from '@mui/system'

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { TaskSchemaType } from '../../../models/Task'

import { TaskSchema } from '../../../schemas'

import MkInput from '../../MkInput'

import Box from '@mui/material/Box'

import StarBorderIcon from '@mui/icons-material/StarBorder'

const Form = styled('form')(() => ({
    width: '100%',
    paddingTop: '20px'
}))


const initValues:TaskSchemaType = { 
    title: ''
}

const TestForm = () => {

    const methods = useForm<TaskSchemaType>({
        defaultValues: initValues,
        resolver: yupResolver(TaskSchema), 
        mode: "onChange"
    })

    const onSubmit = (data:TaskSchemaType) => {
        alert(data.title)
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box sx={{ maxWidth: '300px' }}>
                    <MkInput id="title" title="Title" placeholder='Add Task' endIcon={<StarBorderIcon />} />
                </Box>
            </Form>
        </FormProvider>
    )
}

export default TestForm