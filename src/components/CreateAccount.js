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

        
  <div className='body-container'>     
    <div className='signup-container'>
        <div class="left-section">
            <div class="logo-sign">
            <img src={logo}/>
            </div>
            <div class="text-section">
                <div class="text-1">
                    <img src={icon} style={{width:40,height:40}}/>
                    <div class="cap-1">
                        <h3>Get started quickly</h3>
                        <p>Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</p>
                    </div>
                </div>

                <div class="text-2">
                    <img src={icon}style={{width:40,height:40}}/>
                    <div class="cap-2">
                        <h3>Support any business model</h3>
                        <p>E-commerce, subscriptions, SaaS platforms, marketplaces, and more all within a unified platform.</p>
                    </div>
                </div>

                <div class="text-3">
                    <img src={icon}style={{width:40,height:40}}/>
                    <div class="cap-3">
                        <h3>Join millions of businesses</h3>
                        <p>Switch App is trusted by ambitious startups and enterprises of every size.</p>
                    </div>
                </div>
            </div>
        </div>




        <div class="right-section">
            <div class="container">
                    <h2>Create your Merchant account</h2>
                <div class="form-section">
                    <div action="#">
                        <div id="fill">
                            <input type="text" id="fname" name="fname" placeholder="First Name" required=""/>
                            <input type="text" id="lname" name="lname" placeholder="Last Name" required=""/>
                        </div>
                        <input type="email" id="email" name="email" placeholder="Email" required=""/>
                        <input type="text" id="cname" name="cname" placeholder="Company Name" required=""/>
                        <div className='nig'> 
                        <img src={nig}/>
                         <input type="text" id="cname" name="cname" placeholder="Nigeria" required=""/>
                         </div>
                        <input type="password" id="password" name="password" placeholder="Password" maxlength="10" minlength="2" required="!@#$%"/>
                        <div id="check">
                            <input type="checkbox" value="checkbox"/>
                            <p>I agree that Switch App may contact me at the email address or phone number above.</p>
                        </div>
                        <button type="submit" value="Login">Create Merchant Account</button>
                    </div>
                    <div className="sign-up">
                        <p>Already have an account? <a href="./index.html">Sign in</a></p>
                    </div>
                </div>
            </div>
            </div>
     </div>
     <div className='footerr'>
        <p>© Switch App</p>
        <p href="#">Privacy &amp; terms</p>
    </div>
    </div> 

    );
}

export default CreateAccount;