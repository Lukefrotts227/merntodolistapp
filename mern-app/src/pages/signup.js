import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles/style1.css'; 

import { useNavigate } from 'react-router-dom';


function Signup(){

    return(
        <div className = 'signup'>
            <h2 className = 'signup-h2' > Signup </h2>
        </div>
    );
}


export default Signup;