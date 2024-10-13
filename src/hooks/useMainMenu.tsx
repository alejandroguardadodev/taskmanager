import { useSelector, useDispatch } from 'react-redux'

import { IMainMenuReducer, actionCloseMainMenu, actionOpenMainMenu } from '../reducers/mainmenuReducer'

import { RootState, AppDispatch } from '../store'

const useMainMenu = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { open } = useSelector<RootState, IMainMenuReducer>(state => state.mainmenu)

    const openMainMenu = () => dispatch(actionOpenMainMenu())
    const closeMainMenu = () => dispatch(actionCloseMainMenu())

    return {
        isMainMenuOpen: open,
        openMainMenu,
        closeMainMenu
    }
}

export default useMainMenu