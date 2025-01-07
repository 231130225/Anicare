import React from 'react'
import Styles from "../../assets/styles/Fitur.module.css"

const KategoriH = () => {
  return (
    <div className={Styles.container}>
        <h4 className={Styles.judul}>Kategori Hewan</h4>
        <div className={Styles.containertombol}>
            <button className={Styles.tombol}>
                <p>Anjing</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/620/620851.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Kucing</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/256/3069/3069191.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Reptil</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/2809/2809783.png' />
            </button>
            <button className={Styles.tombol}>
                <p>Burung</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/4498/4498547.png' />
            </button>
            <button className={Styles.tombol}>
                <p>Kelinci</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/3069/3069116.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Kura-kura</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/2911/2911472.png'/>
            </button>
            <button className={Styles.tombol}>
                <p>Hamster</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/512/720/720989.png' />
            </button>
            <button className={Styles.tombol}>
                <p>Landak</p>
                <img className={Styles.iconp} src='https://cdn-icons-png.flaticon.com/256/1159/1159039.png' />
            </button>
        </div>
    </div>
  )
}

export default KategoriH
