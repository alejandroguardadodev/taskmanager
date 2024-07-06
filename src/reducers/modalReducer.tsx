import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ModalTitleType = "test"

export interface IExtraDataType {
    test: null | unknown;
}

export interface IModalReducer {
    test: boolean;
    extradata: IExtraDataType;
}

export interface PayloadActionType {
    title: ModalTitleType;
    extra: null | unknown;
}

const initialStates:IModalReducer = {
    test: false,
    extradata: {
        test: null
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
                ...(action.payload.title == "test" && {
                    test: true,
                    extradata: {
                        ...state.extradata,
                        test: action.payload.extra
                    }
                })
            }
        },
        actionCloseModal(state, action:PayloadAction<ModalTitleType>) {
            return {
                ...state,
                ...(action.payload == "test" && {
                    test: false,
                    extradata: {
                        ...state.extradata,
                        test: null
                    }
                })
            }
        }
    }
})

export const { actionOpenModal, actionCloseModal } = ModalSlice.actions

export default ModalSlice.reducer