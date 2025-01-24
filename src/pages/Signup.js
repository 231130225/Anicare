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
            <div>
              <h5 style={{ paddingTop: "10px" }}>Username</h5>
              <input className={Styles.in}></input>
              <h5 style={{ paddingTop: "10px" }}>Password</h5>
              <input className={Styles.in} type='password'></input>
              <br />
              <button type='submit' className={Styles.btnh}>Sign Up</button>
            </div>
            <p style={{width:"370px", fontSize:"12px"}}>By creating an account you agree with our <span style={{textDecoration:"underline"}}>Terms of Service, Privacy Policy,</span> and our default <span style={{textDecoration:"underline"}}>Notification Settings.</span></p>
            <p style={{fontSize:"14px", marginTop:"10px"}}>Already have an account? <Link to="/login" style={{textDecoration:"underline", cursor:"pointer", color:"black"}}>Sign in</Link></p>
        </div>
        </div>
     )
}

export default Signup
