import React from 'react';
import Styles from '../assets/styles/Logout.module.css';


const Logout = (props) => {
  return (props.trigger) ?(
    <div className={Styles.popup}>
      <div className={Styles.popupinner}>
        <div className={Styles.container}>
            <h2>Mau Ngapain Nich?</h2>
            <button className={Styles.batal} onClick={() => props.setTrigger(false)} >Gak Jadi Bang</button>
            <button className={Styles.logout} >Mau Log Out</button>
            <button className={Styles.delete} >Mau Delete Akun</button>
        </div>
      </div>
    </div>
  ): "";
}

export default Logout;
