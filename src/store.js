import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { ProjectReducer } from './reducers/ProjectReducer'


const reducer = combineReducers({
    projectChoice: ProjectReducer
})


const initialState = {
    projectChoice: "Web"
}

const store = configureStore({
    reducer,
    initialState

})

export default store