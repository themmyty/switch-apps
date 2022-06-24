import React from 'react';
import { useNavigate} from 'react-router-dom';
import './CreateAccount.css'
import logo from '../assets/images/logo.png'
import icon from '../assets/images/icon.png'
import nig from '../assets/images/nig.png'
import eye from '../assets/images/eye.png'

function CreateAccount(props) {

    const navigate = useNavigate();

    return (

        
        <div className='back-container'>
            <div class="float-container">

                <div class="float-child float1">
                    <div class="green">
                        <div className='logopng'>
                            <img src={logo}width={120}height={60}/>
                        </div>

                        <div className='rowitems'>
                            <div className='imageicon'>
                                <img src={icon} width={24}height={36}/>
                            </div>
                            <div className='text1'>
                                <h4>Get started quickly</h4>
                                <h6>Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</h6>
                            </div>
                        </div>
                        <div className='rowitems'>
                            <img src={icon} width={24}height={36}/>
                            <div className='text1'>
                            <h4>Support any business model</h4>
                            <h6>E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.</h6>
                            </div>
                        </div>
                        <div className='rowitems'>
                            <img src={icon} width={24}height={36}/>
                            <div className='text1'>
                            <h4>Get started quickly</h4>
                            <h6>Switch App is trusted by ambitious startups and enterprises of every size.</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="float-child">
                    <div className='blueo'>
                        <div class="blue">
                            <h3>Create your Merchant account</h3>
                        <div className="form">
                <div className="form-body">
                    <div className='rowfield'>
                    <div className="username">
                        <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="lastname">
                        
                        <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
                    </div>
                    </div>
                    <div className="emaill" >
                        
                        <input  type="email" id="email" className="form__input" placeholder="Email"/>
                    </div>
                  
                    <div className="confirm-password">

                        <input className="form__input" type="password" id="confirmPassword" placeholder="Company Name"/>
                    </div>
                    <div className="nig">
                    <img src={nig}width={20}height={12}/>
                        <input className="form__input" type="password"  id="password" placeholder="Nigeria"/>
                        
                    </div>
                    <div className="pasword">

                        <input className="form__input" type="password" id="confirmPassword" placeholder="Password"/>
                        <img src={eye}width={15}height={14}/>
                    </div>
                    <div className='agree'>
                    <h6>I agree that Switch App may contact me at the email address or phone number above.</h6>
                    </div>
                        </div>
                            <button onClick={() => navigate("/SignUp")}
                            style={{width:250,height:39}}
                            className='btn'>Create merchant Account</button>
                            <div className='member1'>
                            <h6>Already have an account?<span>Sign in</span></h6>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                
                </div>

            </div>
        </div>
    );
}

export default CreateAccount;