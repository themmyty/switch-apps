import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../assets/images/Switchlogo.png'
import './Forgotpassword.css';

function ForgotPassword(props) {

    const navigate = useNavigate();

    return (
        <div className='forgotp-container'>
                 <div className='logo-forgott'>
                    <img src={logo} width={164}height='auto' alt='hi'/> 
                 </div>
            <div className='main-f'>
                    <h5>Forgot Password</h5>
                <div className="forrm">
                        <input className="form__input" type="text" id="firstName" placeholder="Email"/>
                    <div className='btn-forgotp'> 
                         <button onClick={() => navigate("/ForgotPassword")} >Continue</button>
                    </div>
                             <div className='dhac'>
                                <p>Don’t have an account?<span onClick={() => navigate("/CreateAccount")}>  Sign up</span></p>
                            </div>
                </div>
            </div> 
        </div> 
       
    );
}

export default ForgotPassword;