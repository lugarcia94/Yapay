import axios from 'axios';
const baseUrl = 'http://localhost:9004/users'

export const apiAction  =  () => {  
    
    const response = axios(baseUrl)
 
    return{         
        type: 'Api_data',
        payload: response      
    } 

}

export const DeleteItem = (id) => {
    return (dispatch) => {
        dispatch(itemRemove(true))

        const request = axios.delete(baseUrl, {
            data: { id }
        })  

        dispatch(itemRemove(false))
    }

}

export function itemRemove(bool) {     
    return {         
        type: 'REMOVE_ITEM',         
        isRemoved: bool     
    } 
}
  