import * as yup from "yup"

export const TaskSchema = yup.object({
    title: yup.string().required('Task title is required'),
})

export const InlineSchema = yup.object({
    data: yup.string().required('is required'),
})
