import axios from 'axios';
const baseUrl = 'http://localhost:9004/users'

export const apiAction  =  () => {  
    
    const response = axios(baseUrl)

    return{         
        type: 'Api_data',
        payload: response      
    } 
}
 
  