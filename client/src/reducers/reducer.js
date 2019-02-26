const INITIAL_STATE = {retornoDb: []}  

export default (state = INITIAL_STATE, action) => {   
    
    switch(action.type) {         
        case 'Api_data':           
            return { ...state, retornoDb: action.payload.data }        
        default: 
            return state     
    } 
}