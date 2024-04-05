import React from 'react'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (

    <div className='footer'>
        <p>About</p>
        <p>Download the X app</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>X for Business</p>
        <p>Developer</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>&copy; {currentYear} X Corp.</p>
        

    </div>
  )
}

export default Footer