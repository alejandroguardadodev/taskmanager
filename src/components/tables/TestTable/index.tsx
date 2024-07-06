import BaseTable from "../BaseTable"

import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { ITask, TaskReader } from "../../../models/Task"

import { ITblHead } from "../../../models/Table"

import useModal from "../../../hooks/useModal"

const TESTHEADER:ITblHead[] = [
  {
      id: 'title',
      showMobile: true,
      showTablet: true,
      label: 'Task',
      inputtype: "text",
      onSubmit: (data:unknown) => {
        alert(`Data: ${data}`)
      } 
  },
  {
      id: 'due',
      showMobile: false,
      showTablet: true,
      label: 'Due',
  },
  {
      id: 'status',
      showMobile: false,
      showTablet: true,
      label: 'Status',
      decoration: [
        {
          key: "TO DO",
          style: {
            background: '#F0E2BC',
            color: 'black',
            fontWeight: '600',
            fontSize: '.7rem',
          }
        },
        {
          key: "DOING",
          style: {
            background: '#ABE6BC',
            color: 'black',
            fontWeight: '600',
            fontSize: '.7rem',
          }
        },
        {
          key: "DONE",
          style: {
            background: '#F7B533',
            color: 'black',
            fontWeight: '600',
            fontSize: '.7rem',
          }
        }
      ]
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
  },
  {
    id: 3,
    title: 'Test 3',
    status: 'DOING',
    due_date: '11/23/2025'
  }
]

const items = [
  {
    title: 'Start',
    icon: <StarBorderIcon />
  }
]

const TestTable = () => {

  const { openModal:openTaskModal } = useModal('task')

  return (
    <BaseTable
        addButtonText="Add Task"
        onAddButton={() => {
          openTaskModal()
        }}
        maxHeight={500}
        header={TESTHEADER}
        data={data}
        reader={TaskReader}
        actionSection={(data:unknown) => {
          const task = data as ITask

          return <IconButton disableRipple onClick={() => { openTaskModal(task) }}><ArrowForwardIosIcon sx={{ fontSize: '.7rem' }} /></IconButton>

        }}
        startIcon={(data:unknown) => {
          const task = data as ITask

          return <IconButton disableRipple onClick={() => { alert(task.title) }}><StarBorderIcon sx={{ fontSize: '1rem' }} /></IconButton>

        }}
        submenuitems={items}
    />
  )
}

export default TestTable