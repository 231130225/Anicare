import React from 'react'
import Styles from "../../assets/styles/Fitur.module.css"

const Fitur = () => {
  return (
    <div className={Styles.container}>
        <h4 className={Styles.judul}>Fitur-fitur menarik kami</h4>
        <div className={Styles.containertombol}>
            <button className={Styles.tombol}>
                <p>Konsultasi</p>
                <img className={Styles.icon} src='https://cdn-icons-png.flaticon.com/512/2138/2138508.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Store</p>
                <img className={Styles.icon} src='https://cdn-icons-png.flaticon.com/512/7438/7438490.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Artikel</p>
                <img className={Styles.icon} src='https://cdn-icons-png.flaticon.com/256/13437/13437621.png' />
            </button>
            <button className={Styles.tombol}>
                <p>Klinik</p>
                <img className={Styles.icon} src='https://cdn-icons-png.flaticon.com/512/11309/11309733.png' />
            </button>
        </div>
    </div>
  )
}

export default Fitur
