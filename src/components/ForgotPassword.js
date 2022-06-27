import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.png'
import './Forgotpassword.css';

function ForgotPassword(props) {

    const navigate = useNavigate();

    return (
        <div className='back-container'>
                 <div className='logo'>
            <img src={logo} width={150}height={50} alt='hi'/> 
            </div>
        <div className='main-t'>
          <div className='submain-t'>
           <h5>Forgot Password</h5>
           <div className="form">
          <div className="form-body">
              <div className="email">
                  <input className="form__input" type="text" id="firstName" placeholder="Email"/>
              </div>
            </div>  
            </div> 
            <div className='btn1'> 
            <button onClick={() => navigate("/ForgotPassword")}
            >Continue</button>
            <h6>Don’t have an account?<span onClick={() => navigate("/SignUp")}>Sign up</span></h6>
            </div> 
            </div> 
        </div>
        </div>
    );
}

export default ForgotPassword;