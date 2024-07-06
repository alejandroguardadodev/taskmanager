import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { IModalReducer, ModalTitleType, actionOpenModal, actionCloseModal } from '../reducers/modalReducer'

import { RootState, AppDispatch } from '../store'

const useModal = (title:ModalTitleType) => {
    const dispatch = useDispatch<AppDispatch>()

    const { test, task, extradata } = useSelector<RootState, IModalReducer>(state => state.modal)

    const open = React.useMemo<boolean>(() => {
        switch(title) {
            case "test":
                return test
            
            case "task":
                return task
            
            default:
                return false
        }
    }, [title, task, test])


    const modalextradata = React.useMemo<null | unknown>(() => {
        switch(title) {
            case "test":
                return extradata.test
            
            case "task":
                return extradata.task

            default:
                return null
        }
    }, [title, extradata])


    const openModal = (data: null | unknown = null) => dispatch(actionOpenModal({ title, extra: data }))
    const closeModal = () => dispatch(actionCloseModal(title))

    return {
        open,
        extradata: modalextradata,
        openModal,
        closeModal
    }
}

export default useModal