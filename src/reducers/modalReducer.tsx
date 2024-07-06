import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ModalTitleType = "test" | "task"

export interface IExtraDataType {
    test: null | unknown;
    task: null | unknown;
}

export interface IModalReducer {
    test: boolean;
    task: boolean;
    extradata: IExtraDataType;
}

export interface PayloadActionType {
    title: ModalTitleType;
    extra: null | unknown;
}

const initialStates:IModalReducer = {
    test: false,
    task: false,
    extradata: {
        test: null,
        task: null,
    }
}

// eslint-disable-next-line react-refresh/only-export-components
const ModalSlice = createSlice({
    name: 'modal',
    initialState: initialStates,
    reducers: {
        actionOpenModal(state, action:PayloadAction<PayloadActionType>) {
            return {
                ...state,
                [action.payload.title]: true,
                extradata: {
                    ...state.extradata,
                    [action.payload.title]: action.payload.extra
                }
            }
        },
        actionCloseModal(state, action:PayloadAction<ModalTitleType>) {
            return {
                ...state,
                [action.payload]: false,
                extradata: {
                    ...state.extradata,
                    [action.payload]: null
                }
            }
        }
    }
})

export const { actionOpenModal, actionCloseModal } = ModalSlice.actions

export default ModalSlice.reducer