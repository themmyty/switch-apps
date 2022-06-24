import React from 'react';
import './Loginpage.css';
import { useState } from "react";
import logo from '../src/assets/images/logo.png'
import { useNavigate} from 'react-router-dom';




function Loginpage(props) {

  const navigate = useNavigate();


  const [account, setaccount] = useState('');   

  const handleChange=(e)=>{
    setaccount( e.target.value);
  }
    return (
        <div className='back-container'>
          
          <div className='logo'>
            <img src={logo} alt='ol' width={190}height={50} />
          </div>
        <div className='main'>
          <div className='submain'>
            <div className='getstarted'>
              <h4>Get started with Switch App</h4>
            </div>
            <div className="radio">
               <label>
                   <input type="radio" value="PersonalAcct" 
                   onChange={handleChange} name="account"/>
                   Personal Account
              </label>
            </div>
            <div className='textone'>
              <h6>Shop online or send money. All without sharing your payment info.</h6>
            </div>
            <div className="radio">
          <label>
            <input type="radio" value="MerchantAcct"
             onChange={handleChange} name="account"/>
            Merchant Account
          </label>
        </div>
        <div className='textt'>
        <h6>Let your customers Shop online and receive instant 
          settlement. All without sharing your payment info.</h6>
          </div>
          <div className='btnn'>
            <button onClick={() => navigate("/CreateAccount")}>Continue</button>
          </div>
          </div>
        </div>
        </div>
    );
}

export default Loginpage;


