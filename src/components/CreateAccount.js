import React from 'react';
import { useNavigate} from 'react-router-dom';
import './CreateAccount.css'
import logo from '../assets/images/Switchlogo.png'
import icon from '../assets/images/icon.png'
import nig from '../assets/images/nig.png'
import eye from '../assets/images/eye.png'
import back from '../assets/images/bak.png'


function CreateAccount(props) {

const navigate = useNavigate();

    return (

        
<div className='body-container'> 
        <div className='back'>
            <img src={back} onClick={() => navigate("/")}/>
            <p>Back</p>
        </div>
    <div className='login-container'>
        <div class="left-section">
        
            <div class="login-logo">
                <img src={logo}/>
            </div>
            <div class="text-section">
                <div class="text-1">
                    <div className='icon1'>
                        <img src={icon}/>
                    </div>
                    
                    <div class="cap-1">
                        <h3>Get started quickly</h3>
                        <p>Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</p>
                    </div>
                </div>

                <div class="text-2">
                <div className='icon1'>
                     <img src={icon}/>
                    </div>
                    <div class="cap-2">
                        <h3>Support any business model</h3>
                        <p>E-commerce, subscriptions, SaaS platforms, marketplaces, and more all within a unified platform.</p>
                    </div>
                </div>

                <div class="text-3">
                <div className='icon1'>
                     <img src={icon}/>
                    </div>
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
                    <div className='firstandlast'>
                        <input type="text" id="fname" name="fname" placeholder="First Name" 		required=""/>
		                <input type="text" id="lname" name="lname" placeholder="Last Name" 		required=""/>
		            </div>
                    <input type="email" id="email" name="email" placeholder="Email"required=""/>
		            <input type="text" id="cname" name="cname" placeholder="CompanyName" required=""/>
		            <input type="text" id="cname" name="cname" placeholder="Nigeria"required=""/>
                    <div className='eyepassword'>
		            <input type="password" id="password" name="password" placeholder="Password"maxlength="10" minlength="2" required="!@#$%"/>
                        <img src={eye}/>
                    </div>
                    <div id="check">
                        <input type="checkbox" value="checkbox"/>
                        <p>I agree that Switch App may contact me at the email address or phone number above.</p>
                    </div>
                    <div>
                            <button type="submit" value="Login" onClick={() => navigate("/SignUp")}>Create Merchant Account</button>
                    </div>
                    <div className="sign-up">
                            <p>Already have an account? <a href="./SignUp">Sign in</a></p>
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