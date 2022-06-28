import React from 'react';
import './Loginpage.css';
import { useState } from "react";
import logo from '../assets/images/Switchlogo.png'
import { useNavigate} from 'react-router-dom';




function Loginpage(props) {

  const navigate = useNavigate();


  const [account, setaccount] = useState('');   

  const handleChange=(e)=>{
    setaccount( e.target.value);
  }
    return (
        <div className='main'>
          
          <div className='logo-login'>
            <img src={logo} alt='ol'  />
          </div>
          <div className='container'>
  
              <h4>Get started with Switch App</h4>
            
            <div className="radio-selection">
              <div className='psac'>
                   <input type="radio" value="PersonalAcct" onChange={handleChange} name="account"/>
                   <div className='psac-cap'>
                        <h3>Personal Account</h3>
                        <p>Shop online or send money. All without sharing your payment info.</p>
                   </div>
              </div>
              <div className='macc'>
                    <input type="radio" value="MerchantAcct" onChange={handleChange} name="account"/>
                  <div className='macc-cap'>
                      <h3>Merchant Account</h3>
                      <p>Let your customers Shop online and receive instant 
                        settlement. All without sharing your payment info.</p>
                  </div> 
              </div>
            </div>

            <div className='btnn'>
              <button onClick={() => navigate("/CreateAccount")}>Continue</button>
            </div>
          </div>
          <div className='footer'>
            <p>© Switch App</p>
            <p>Privacy & terms</p>
          </div>
        </div>
    );
}

export default Loginpage;


