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

            <form className = "signupbox-form-1" onSubmit ={handleSubmit}>
                <label className = "signupbox-label-1">Email</label>
                <input classname = "signupbox-input-1"
                type = "text"
                name = "email"
                value = {email}
                ongChange = {(e) => setEmail(e.target.value)}
                required
                />
                <label className = "signupbox-label-2">Password</label>
                <input classname = "signupbox-input-2"
                type = "password"
                name = "password"
                value = {password}
                ongChange = {(e) => setPassword(e.target.value)}
                required
                />

                <button className ="sinupbox-button-1" type = "submit" >Signup</button>
                

            </form>


        </div>


    ); 
}


export default SignUpBox; 

