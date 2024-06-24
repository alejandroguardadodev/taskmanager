import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IPageReducer {
    pagewidth: number;
}

const initialStates:IPageReducer = {
    pagewidth: 0,
}

// eslint-disable-next-line react-refresh/only-export-components
const PageSlice = createSlice({
    name: 'page',
    initialState: initialStates,
    reducers: {
        actionSetPageWidth(state, action:PayloadAction<number>) {
            return {
                ...state,
                pagewidth: action.payload,
            }
        }
    }
})

export const { actionSetPageWidth } = PageSlice.actions

export default PageSlice.reducer