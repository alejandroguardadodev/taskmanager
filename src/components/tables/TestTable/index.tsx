import BaseTable from "../BaseTable"

import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { ITask, TaskReader } from "../../../models/Task"

const TESTHEADER = [
  {
      id: 'title',
      showMobile: true,
      showTablet: true,
      label: 'Task',
  },
  {
      id: 'due',
      showMobile: true,
      showTablet: true,
      label: 'Due',
  },
  {
      id: 'status',
      showMobile: true,
      showTablet: true,
      label: 'Status',
  }
]

const data = [
  {
    id: 1,
    title: 'Test 1',
    status: 'TO DO',
    due_date: '12/12/2024'
  },
  {
    id: 2,
    title: 'Test 2',
    status: 'DONE',
    due_date: '01/30/2023'
  }
]

const items = [
  {
    title: 'Start',
    icon: <StarBorderIcon />
  }
]

const TestTable = () => {
  return (
    <BaseTable
        addButtonText="Add Task"
        maxHeight={500}
        header={TESTHEADER}
        data={data}
        reader={TaskReader}
        actionSection={(data:unknown) => {
          const task = data as ITask

          return <IconButton disableRipple onClick={() => { alert(task.title) }}><ArrowForwardIosIcon sx={{ fontSize: '.7rem' }} /></IconButton>

        }}
        submenuitems={items}
    />
  )
}

export default TestTable