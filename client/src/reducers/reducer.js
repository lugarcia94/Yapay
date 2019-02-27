const INITIAL_STATE = {retornoDb: []}  

export default (state = INITIAL_STATE, action) => {   
    
    switch(action.type) {         
        case 'Api_data':           
            return { ...state, retornoDb: action.payload.data } 

        case 'REMOVE_ITEM': 
            return action.isRemoved
            
        default: 
            return state     
    } 
}

 