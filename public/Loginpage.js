import React from 'react';
import './Loginpage.css';
import logo from '../src/assets/images/logo.png'
import bimage from '../src/assets/images/bimage.png'



function Loginpage(props) {
    return (
        <div>
          <div className='contain'>
          <img src={bimage} alt='oi' />
          </div>
          <div className='logo'>
            <img src={logo} alt='ol' width={201}height={58} />
          </div>
        <div className='main'>
          <div className='submain'>
            <div>
              <h4>Get started with Switch App</h4>
            </div>
            <div className="radio">
          <label>
            <input type="radio" value="Personal Account" checked={true} />
            Option 1
          </label>
        </div>
            <div>
              <h4>Shop online or send money. All without sharing your payment info.</h4>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Loginpage;


