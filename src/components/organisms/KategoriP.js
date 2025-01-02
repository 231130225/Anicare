import React from 'react'
import Styles from "../../assets/styles/Fitur.module.css"

const KategoriP = () => {
  return (
    <div className={Styles.container}>
        <h4 className={Styles.judul}>Kategori populer</h4>
        <div className={Styles.containertombol}>
            <button style={{backgroundColor:"#DDFFD2"}} className={Styles.tombol}>
                <p>Makanan</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/5019/5019801.png'/>
            </button>
            <button style={{backgroundColor:"#D2EEFF"}} className={Styles.tombol}>
                <p>Alat</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/3636/3636120.png'/>
            </button>
            <button style={{backgroundColor:"#FFD2D2"}} className={Styles.tombol}>
                <p>Obat</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/760/760950.png' />
            </button>
            <button style={{backgroundColor:"lightgray"}} className={Styles.tombol}>
                <p>Aksesories</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/2184/2184769.png' />
            </button>
        </div>
    </div>
  )
}

export default KategoriP
