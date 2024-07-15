import * as yup from "yup"

import { styled } from '@mui/system'

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Grid from '@mui/material/Grid'

import Button from '@mui/material/Button'

import MkInput from "../../../components/MkInput"

import { SignUpSchema } from '../../../schemas'
import { Stack } from "@mui/material"

const Form = styled('form')(() => ({
    paddingTop: '20px'
}))

const GridItem = styled(Grid)(() => ({
    paddingLeft: '14px'
}))

export type SignUpSchemaType = yup.InferType<typeof SignUpSchema>

const initValues:SignUpSchemaType = { 
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    contact: "",
}

const SignUpForm = () => {

    const methods = useForm<SignUpSchemaType>({
        defaultValues: initValues,
        resolver: yupResolver(SignUpSchema), 
        mode: "onChange"
    })

    const onSubmit = (data:SignUpSchemaType) => {
        
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={6}>
                        <MkInput id="username" title="Username*" />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={4}>
                        <MkInput id="firstname" title="First Name*" />
                    </Grid>
                    <GridItem item xs={3}>
                        <MkInput id="middlename" title="Middle Name"  />
                    </GridItem>
                    <GridItem item xs={5}>
                        <MkInput id="lastname" title="Last Name" />
                    </GridItem>
                    <Grid item xs={12}>
                        <MkInput id="contact" title="Email*" />
                    </Grid>
                    <Grid item xs={6}>
                        <MkInput id="password" title="Password*" type="password" />
                    </Grid>
                    <GridItem item xs={6}>
                        <MkInput id="confirmpassword" title="Confirm Password*" type="password" />
                    </GridItem>
                </Grid>

                <Stack flexDirection="row" justifyContent="flex-end" sx={{ marginTop: '20px' }}>
                    <Button type="submit" variant="contained">Sign Up</Button>
                </Stack>
            </Form>
        </FormProvider>
    )
}

export default SignUpForm