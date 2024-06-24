import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useResizeDetector } from 'react-resize-detector'

import { IPageReducer, actionSetPageWidth } from '../reducers/pageReducer'

import { RootState, AppDispatch } from '../store'

const useResizePage = (disablewidthupdate?: boolean) => {
    const dispatch = useDispatch<AppDispatch>()

    const { ref: pageRef, width } = useResizeDetector()

    const { pagewidth } = useSelector<RootState, IPageReducer>(state => state.page)

    React.useEffect(() => {
        if (!disablewidthupdate && width) dispatch(actionSetPageWidth(width))
    }, [width, dispatch, disablewidthupdate])

    return {
        pageRef,
        pagewidth,
    }
}

export default useResizePage