import React from 'react'
import Styles from "../assets/styles/Login.module.css"
import logo from "../assets/images/Anicare logo.png"
import { Link } from 'react-router-dom'

const Forgot = () => {
    return (
        <div>
            <div className={Styles.vcontainerr}>
                <video className={Styles.video} autoPlay muted loop>
                    <source src='https://cdn.dribbble.com/users/927009/screenshots/19315712/media/ad80c854b2c85578614df3fa4afff997.mp4' />
                </video>
            </div>
            <div  className={Styles.container} style={{top:"30%"}}>
                <h2>Forgot Password?</h2>
                <div>
                    <h5 style={{ paddingTop: "10px" }}>Username</h5>
                    <input className={Styles.in}></input>
                    <h5 style={{ paddingTop: "10px" }}>Password Baru</h5>
                    <input className={Styles.in} type='password'></input>
                    <br />
                    <button type='submit' className={Styles.btnh}>Ubah Password</button>
                </div>
            </div>
        </div>
     )
}

export default Forgot
