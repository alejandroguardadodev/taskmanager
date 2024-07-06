import React from "react"

import BaseHorizontalModal from "../bases/BaseHorizontalModal"

import Typography from "@mui/material/Typography"

import useModal from "../../../hooks/useModal"

import { ITask } from "../../../models/Task"

const TaskMenuModal = () => {

    const { extradata } = useModal("task")

    const isEdit = React.useMemo<boolean>(() => Boolean(extradata), [extradata])
    const task = React.useMemo<null | ITask>(() => {
        if (!isEdit) return null

        return extradata as ITask
    }, [isEdit, extradata])

    return (
        <BaseHorizontalModal title="task" header="Task">
            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1rem', lineHeight: '1.2rem' }}>{isEdit? `Task: ${task?.title}` : "New Task"}</Typography>
        </BaseHorizontalModal>
    )
}

export default TaskMenuModal