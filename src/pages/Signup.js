import React from 'react'
import Styles from "../assets/styles/Login.module.css"
import logo from "../assets/images/Anicare logo.png"
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
        <div className={Styles.vcontainerr}>
            <video className={Styles.video} autoPlay muted loop>
                <source src='https://cdn.dribbble.com/userupload/10673562/file/original-f844221dc4f375489281f5a09001e485.mp4'/>
            </video>
        </div>
        <div  className={Styles.container} style={{top:"30%"}}>
            <h2>Sign Up to <img className={Styles.logosign} src={logo} alt='logo' /></h2>
            <button className={Styles.btnh} style={{paddingLeft:'50px'}}> <img style={{width:"15px", position:"absolute", left:"120px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'/> sign up with google</button>
            <p style={{color:"gray", padding:"10px 0", textAlign:"center"}}>or</p>
            <button type='submit' className={Styles.btnp}>Continue with email</button>
            <p style={{width:"370px", fontSize:"12px", margin:"20px"}}>By creating an account you agree with our <span style={{textDecoration:"underline"}}>Terms of Service, Privacy Policy,</span> and our default <span style={{textDecoration:"underline"}}>Notification Settings.</span></p>
            <p style={{fontSize:"14px", margin:"10px"}}>Already have an account? <Link to="/login" style={{textDecoration:"underline", cursor:"pointer", color:"black"}}>Sign in</Link></p>
        </div>
        </div>
     )
}

export default Signup
