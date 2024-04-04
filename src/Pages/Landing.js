import React from 'react'
import logo from '../assets/logo.svg'
import './Landing.css'

function Landing() {
  return (
    <div className='landing'>
        {/* Main page divided into 2 parts; LEFT & RIGHT. Right is further divided into multiple parts */}
        <div className="landing__left">
            <img src={logo} alt='twitter logo'/>
        </div>

        {/* Below code is for the right side of the page */}
        <div className="landing__right">
            <h1>Happening Now</h1>

            {/* All the buttons and sign in options in the below divs */}

            <div className="landing__rightOptions">
                <h2>Join today.</h2>
                <div className="landing__rightOptionsMiddle">
                <button>Google</button>
                <button>Apple</button>
             
                <button>Create account</button>
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                </div>

                <div className="landing__rightOptionsBottom">
                <h3>Already have an account?</h3>
                <button>Sign in</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing