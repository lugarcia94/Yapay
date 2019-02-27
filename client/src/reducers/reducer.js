const INITIAL_STATE = {retornoDb: []}  

export function apiData (state = INITIAL_STATE, action) {   
    
    switch(action.type) {         
        case 'Api_data':           
            return { ...state, retornoDb: action.payload.data } 
            
        default: 
            return state     
    } 
}

export function removeItem (state = false, action) {
    switch(action.type) {
        case 'REMOVE_ITEM': 
            return action.isRemoved;
        default:
            return state;
    }
}