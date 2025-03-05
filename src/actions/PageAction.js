export const changePage = (val) => (dispatch) => {
    
    dispatch({
        type: val
    })

}

export const setPage = ( minPage, maxPage ) => (dispatch) => {
    dispatch({ type: "SetPage", payload: { minPage, maxPage } })

}