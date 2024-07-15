import * as yup from "yup"

export const TaskSchema = yup.object({
    title: yup.string().required('Task title is required'),
})

export const InlineSchema = yup.object({
    data: yup.string().required('is required'),
})

export const SignUpSchema = yup.object({
    firstname: yup.string().required('First Name is required'),
    middlename: yup.string(),
    lastname: yup.string(),
    username: yup.string().required('Username is required'),
    contact: yup.string().required('Contact Method is required'),
    password: yup.string().required('Password is required'),
    confirmpassword: yup.string().required('Confirm password is required'),
})