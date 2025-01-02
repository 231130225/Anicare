import React from 'react'
import Styles from "./PageLogin.module.css"
import { Link, useNavigate } from 'react-router-dom'

const PageSignup = () => {

    return (
        <div>
        <div className={Styles.vcontainerr}>
            <video className={Styles.video} autoPlay muted loop>
            <source src='https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515'/>
            </video>
        </div>
        <div  className={Styles.container} style={{top:"30%"}}>
            <h2>Sign Up to Dribbble</h2>
            <button className={Styles.btnh} style={{paddingLeft:'50px'}}> <img style={{width:"15px", position:"absolute", left:"120px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'/> sign up with google</button>
            <p style={{color:"gray", padding:"10px 0"}}>---------------------- or -----------------------</p>
            <button type='submit' className={Styles.btnp}>Continue with email</button>
            <p style={{width:"370px", fontSize:"12px", margin:"20px"}}>By creating an account you agree with our <span style={{textDecoration:"underline"}}>Terms of Service, Privacy Policy,</span> and our default <span style={{textDecoration:"underline"}}>Notification Settings.</span></p>
            <p style={{fontSize:"14px", margin:"10px"}}>Already have an account? <Link to="/signin" style={{textDecoration:"underline", cursor:"pointer", color:"black"}}>Sign in</Link></p>
        </div>
        </div>
     )
}

export default PageSignup
