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


const VALUES = [
    {
        id: 0,
        name: "None"
    },
    {
        id: 1,
        name: "Select"
    },
    {
        id: 2,
        name: "Option"
    }
]

const initValues:TaskSchemaType = { 
    title: ""
}

const TestForm = () => {

    const methods = useForm<TaskSchemaType>({
        defaultValues: initValues,
        resolver: yupResolver(TaskSchema), 
        mode: "onChange"
    })

    const onSubmit = (data:TaskSchemaType) => {
        
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box sx={{ maxWidth: '300px' }}>
                    <MkInput id="title" title="Title" type='select' placeholder='Task' endIcon={<StarBorderIcon />} defaultvalue={0} values={VALUES} />
                </Box>
            </Form>
        </FormProvider>
    )
}

export default TestForm