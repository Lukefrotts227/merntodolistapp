import axios from 'axios'; 

const URL = 'http://localhost:5000'; 

export const createUser = async(user)=>{
    const response = await axios.post('${URL}/users/createUser', user); 
    return response; 
}