export const WebPageReducer = (state = {currentPage: 1 , maxPage:0, minPage:1}, action) =>{

    switch (action.type){
        case "Next":
            if (state.currentPage === state.maxPage){
                return state
            }
            return {...state, currentPage: state.currentPage+1}

        case "Previous":

            if (state.currentPage === state.minPage){
                return state
            }
            return {...state, currentPage: state.currentPage-1}

        case "WebSetPage":
            
            return {...state,
                maxPage:action.payload.maxPage,
                minPage: action.payload.minPage
            }
        default:
            return state

    }

}

export const AcdPageReducer = (state = {currentPage: 1 , maxPage:0, minPage:1}, action) =>{

    switch (action.type){
        case "Next":
            if (state.currentPage === state.maxPage){
                return state
            }
            return {...state, currentPage: state.currentPage+1}

        case "Previous":

            if (state.currentPage === state.minPage){
                return state
            }
            return {...state, currentPage: state.currentPage-1}

        case "AcdSetPage":
            
            return {...state,
                maxPage:action.payload.maxPage,
                minPage: action.payload.minPage
            }
        default:
            return state

    }

}