import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='flex row grey-1-bg'>
      <div className='footer-item flex column h-100'>
        <div className='footer-item-title'>Links:</div>
        <Link className='footer-item-link' to='/'>
          ➜ Home
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ Profile
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ About Us
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ Contact Us
        </Link>
      </div>
      <div className='footer-item flex column h-100'>
        <div className='footer-item-title'>Socials:</div>
        <Link className='footer-item-link' to='/'>
          ➜ Facebook
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ Twitter
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ Instagram
        </Link>
        <Link className='footer-item-link' to='/'>
          ➜ LinkedIn
        </Link>
      </div>
      <div className='footer-item flex column h-100'>
        <div className='footer-item-title'>About Us:</div>
        <p className='footer-item-text'>
          TULP is the ultimate learning platform for teaching and taking classes
          online, we provide the best user experience so you can focus on taking
          classes or making them. With TULP you will never need any other
          platform or tool to host the best material online.
        </p>
      </div>
      <div className='copy-right flex center black-bg'>
        Made by Ali Hakim, All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
