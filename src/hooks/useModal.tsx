import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { IModalReducer, ModalTitleType, IExtraDataType, actionOpenModal, actionCloseModal } from '../reducers/modalReducer'

import { RootState, AppDispatch } from '../store'

const useModal = (title:ModalTitleType) => {
    const dispatch = useDispatch<AppDispatch>()

    const { test, extradata } = useSelector<RootState, IModalReducer>(state => state.modal)

    const open = React.useMemo<boolean>(() => {
        switch(title) {
            default:
                return test
        }
    }, [title, test])


    const modalextradata = React.useMemo<IExtraDataType>(() => {
        switch(title) {
            default:
                return extradata
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