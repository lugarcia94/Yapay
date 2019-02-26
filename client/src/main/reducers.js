import { combineReducers } from 'redux'  
import Api_data from '../reducers/reducer'

export default combineReducers({   
    retornoDb: Api_data
})