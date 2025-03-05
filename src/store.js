import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { ProjectReducer } from './reducers/ProjectReducer'
import { PageReducer } from './reducers/PageReducer'


const reducer = combineReducers({
    projectChoice: ProjectReducer,
    pages:PageReducer
})


const initialState = {
    projectChoice: "Web"
}

const store = configureStore({
    reducer,
    initialState

})

export default store