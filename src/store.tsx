import { configureStore } from '@reduxjs/toolkit'

import pageReducer from './reducers/pageReducer'
import modalReducer from './reducers/modalReducer'
import mainmenuReducer from './reducers/mainmenuReducer'

const store = configureStore({
    reducer: {
        page: pageReducer,
        modal: modalReducer,
        mainmenu: mainmenuReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store