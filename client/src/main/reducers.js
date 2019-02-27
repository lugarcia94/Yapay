import { combineReducers } from 'redux'  
import { apiData, removeItem } from '../reducers/reducer'

export default combineReducers({   
    retornoDb: apiData,
    removeItem
})

