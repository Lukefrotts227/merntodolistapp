import axios from 'axios';

const URI_API = 'https:localhost:8082';


export const createUser = async(user)=>{
    const response = await axios.post (`${URI_API}/users/createUser`, user);
    return response;
}