import React from 'react';
import { useNavigate} from 'react-router-dom';
import './SignUp.css'
import logo from '../assets/images/Switchlogo.png'

function SignUp(props) {

    const navigate = useNavigate();

    return (
        <div className='signup-container'>
          
                <img src={logo} alt='hi'/>
            
            <div className='main-c'>
                <h5>Sign in to your account</h5>
                <div className="form">
                        <input className="form__input" type="text" id="Email" placeholder="Email"/>
                    
                    <div className='forgotpassword'>
                        <p onClick={() => navigate("/ForgotPassword")}>Forgot Password?</p>
                    </div>
                        <input  type="text" name="" id="password"  className="form__input"placeholder="Password"/>
                    
                    <div className='btnsignup'>
                    <button onClick={() => navigate("/ForgotPassword")}>Continue</button>
                    </div>
                    <div className='member1'>
                    <p>Don't have an account?<span onClick={() => navigate("/CreateAccount")}>  Sign up</span></p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default SignUp; 