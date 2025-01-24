import React from 'react'
import Styles from "../assets/styles/Login.module.css"
import logo from "../assets/images/Anicare logo.png"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
          <div className={Styles.vcontainerr}>
            <video className={Styles.video} autoPlay muted loop>
              <source src='https://cdn.dribbble.com/users/927009/screenshots/19315712/media/ad80c854b2c85578614df3fa4afff997.mp4' />
            </video>
          </div>
          <div className={Styles.container}>
            <h2>Sign in to <img className={Styles.logologin} src={logo} alt='logo' /></h2>
            <div>
              <h5 style={{ paddingTop: "10px" }}>Username</h5>
              <input className={Styles.in}></input>
              <h5 style={{ paddingTop: "10px" }}>Password <Link to="/forgot" style={{ textDecoration: "underline", cursor: "pointer", fontWeight:"normal", color:"black", float:"right"}}>Forgot ?</Link></h5>
              <input className={Styles.in} type='password'></input>
              <br />
              <button type='submit' className={Styles.btnh}>Sign In</button>
            </div>
            <p>Don't have an account? <Link to="/signup" style={{ textDecoration: "underline", cursor: "pointer", color: "black" }}>Sign up</Link></p>
          </div>
        </div>
      )
}

export default Login
