import api from '../services/api';

export const apiAction  =  () => {  
    
    const response = api.get('/users');
 
    return{         
        type: 'Api_data',
        payload: response      
    } 

}

export const DeleteItem = (id) => {
    return  dispatch => {
        dispatch(itemRemove(true))
        api.delete('/users/' + id).then(() => dispatch(itemRemove(false)));
    }
}

export function itemRemove(bool) {     
    return {         
        type: 'REMOVE_ITEM',         
        isRemoved: bool     
    } 
}
  