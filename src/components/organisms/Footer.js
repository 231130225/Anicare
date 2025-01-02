import React from 'react'
import Styles from "../../assets/styles/Footer.module.css"

const Footer = () => {
  return (
    <div>
      <footer className={Styles.container}>
        <h2 className={Styles.judul}>Anicare</h2>
        <ul className={Styles.satu}>
            <li>Site Map</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Syarat & ketentuan</li>
            <li>Kebijakan Privasi</li>
        </ul>
        <ul className={Styles.dua}>
            <li>Karir</li>
            <li>Security</li>
            <li>Media</li>
            <li>Corporate Partnership</li>
        </ul>
        <ul className={Styles.tiga}>
            <li><span>Layanan pengaduan konsumen</span></li>
            <li><span>PT Mundur Terus</span></li>
            <li>Jl Thamrin, Sumatera Utara</li>
            <li>Help@anicare/0811-1111-1111</li>
        </ul>
      </footer>
      <p className={Styles.p}>COPYRIGHT ©ANICARE, 2024. ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer
