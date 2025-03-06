import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { ProjectReducer } from './reducers/ProjectReducer'
import { AcdPageReducer, WebPageReducer } from './reducers/PageReducer'


const reducer = combineReducers({
    projectChoice: ProjectReducer,
    AcdPages:AcdPageReducer,
    WebPages:WebPageReducer
})


const store = configureStore({
    reducer,

})

export default store
