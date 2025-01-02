import React from 'react'
import Styles from "./PageLogin.module.css"
import { Link, useNavigate } from 'react-router-dom'

const PageLogin = () => {

  const navigate = useNavigate()

  const handleclick = () => {
    navigate("/")
  }

  return (
    <div>
      <div className={Styles.vcontainerr}>
        <video className={Styles.video} autoPlay muted loop>
          <source src='https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949' />
        </video>
      </div>
      <div className={Styles.container}>
        <h2>Sign in to Dribbble</h2>
        <button className={Styles.btnp} style={{ paddingLeft: '50px' }}> <img style={{ width: "15px", position: "absolute", left: "120px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' /> sign in with google</button>
        <p style={{ color: "gray", padding: "10px 0" }}>-------------- or sign in with email ---------------</p>
        <form>
          <h5 style={{ paddingTop: "10px" }}>Username or email</h5>
          <input className={Styles.in}></input>
          <h5 style={{ paddingTop: "10px" }}>Password <span style={{ fontWeight: "normal", textDecoration: "underline", float: "right" }}>Forgot?</span></h5>
          <input className={Styles.in}></input>
          <br />
          <button type='submit' className={Styles.btnh} onClick={handleclick}>Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup" style={{ textDecoration: "underline", cursor: "pointer", color: "black" }}>Sign up</Link></p>
      </div>
    </div>
  )
}

export default PageLogin
