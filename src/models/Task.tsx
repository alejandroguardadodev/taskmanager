import * as yup from "yup"

import { ITblCell } from "./Table"

import { TaskSchema } from "../schemas"

export type TaskSchemaType = yup.InferType<typeof TaskSchema>

export interface ITask {
    id: number;
    title: string;
    status: string;
    description?: string;
    due_date?: string;
    due_time?: string;
}

export const TaskReader = (data:unknown) : ITblCell[] | null => {

    const task = data as ITask

    return [
        {
            key: 'title',
            value: task.title,
            showMobile: true,
            showTablet: true,
        },
        {
            key: 'due',
            value: `${task.due_date || ''} ${task.due_time || ''}`.trim(),
            showMobile: true,
            showTablet: true,
            maxWidth: 130,
        },
        {
            key: 'status',
            value: task.status,
            showMobile: true,
            showTablet: true,
            maxWidth: 130,
        },
    ]
}