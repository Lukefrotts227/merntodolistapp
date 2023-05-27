import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import '../App.css'
import './styles/style1.css'; 

import { useNavigate } from 'react-router-dom';


function Signup(){

    return(
        <div>
            <h2 className ="signup" > SignUP </h2>
        </div>
    );
}


export default Signup;