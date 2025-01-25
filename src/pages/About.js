import React from 'react';
import Styles from '../assets/styles/About.module.css';


const About = (props) => {
  return (props.trigger) ?(
    <div className={Styles.popup}>
      <div className={Styles.popupinner}>
      <button className={Styles.close} onClick={() => props.setTrigger(false)}>X</button>
        <div className={Styles.container}>
            <h2 style={{color:"#FF971D"}}>Apa itu Anicare?</h2>
            <h5>Anicare adalah website yang menyediakan layanan konsultasi melalui online tanpa harus berkonsultasi langsung di klinik. Tidak perlu mengantri, langsung sat set. Anicare juga menyediakan e-commerce produk hewa  agar para pecinta Anibul dapat memenuhi kebutuhan si kesayangan</h5>
        </div>
      </div>
    </div>
  ): "";
}

export default About;
