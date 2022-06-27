import React from 'react';
import { useNavigate} from 'react-router-dom';
import './SignUp.css'
import logo from '../assets/images/logo.png'

function SignUp(props) {

    const navigate = useNavigate();

    return (
        <div className='back-container'>
            <div className='logo'>
            <img src={logo} alt='hi'width={150}height={58}/>
            </div>
        <div className='main-c'>
          <div className='submain-c'>
           <h5>Sign in to your account</h5>
           <div className="form">
          <div className="form-body">
              <div className="email">
                  <input className="form__input" type="text" id="firstName" placeholder="Email"/>
              </div>
              <h6 onClick={() => navigate("/ForgotPassword")}>Forgot Password?</h6>
              <div className="password">
                
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="password"/>
              </div>
              
            </div>  
            </div> 
            <div className='btnsignup'>
            <button onClick={() => navigate("/ForgotPassword")}
           
            >Continue</button>
            </div>
            <div className='member1'>
            <h6>Don’t have an account?<span onClick={() => navigate("/CreateAccount")}>Sign up</span></h6>
            </div>
            </div> 
        </div>
        </div>
    );
}

export default SignUp; 