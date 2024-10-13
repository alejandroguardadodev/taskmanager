import { createSlice } from '@reduxjs/toolkit'

export interface IMainMenuReducer {
    open: boolean;
}

const initialStates:IMainMenuReducer = {
    open: true,
}

// eslint-disable-next-line react-refresh/only-export-components
const MainMenuSlice = createSlice({
    name: 'page',
    initialState: initialStates,
    reducers: {
        actionOpenMainMenu(state) {
            return {
                ...state,
                open: true,
            }
        },
        actionCloseMainMenu(state) {
            return {
                ...state,
                open: false,
            }
        }
    }
})

export const { actionOpenMainMenu, actionCloseMainMenu } = MainMenuSlice.actions

export default MainMenuSlice.reducer