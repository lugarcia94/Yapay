import { combineReducers } from 'redux'  
import Api_data from '../reducer/reducer'

export default combineReducers({   
    retornoDb: Api_data
})