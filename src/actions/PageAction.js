export const changePage = (val) => (dispatch) => {
    
    dispatch({
        type: val
    })

}

export const setPage = ( type, minPage, maxPage ) => (dispatch) => {
    
    if (type === "Acd"){
        
        dispatch({ type: "AcdSetPage", payload: { minPage, maxPage } })
    }else{
        dispatch({ type: "WebSetPage", payload: { minPage, maxPage } })
    }
    

}