import { createUser } from "../../api";
import React, {useState} from 'react'; 

function SignUpBox(){
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const [error, setError] = useState(''); 
    //const [successMessage, setSuccessMessage] = useState('');

    function resetScreen(){
        setEmail('');
        setPassword('')
        setError(null);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {email, password}; 
        try {
            const response = await createUser(user)

        } catch (error) {
            setError(error.response.data.message); 
            console.log(error);
        }

        resetScreen(); 


    }

    return(
        <div className = "singupbox">

            <form onSubmit ={handleSubmit}>
                
            </form>


        </div>


    ); 
}


export default SignUpBox; 

