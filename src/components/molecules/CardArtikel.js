import React from 'react'
import Styles from "../../assets/styles/CardArtikel.module.css"

const CardArtikel = (props) => {
    return (
        <div className={Styles.card}>
            <h4  className={Styles.kategori}>{props.kategori}</h4>
            <img  className={Styles.foto} src={props.foto ?? "not-available.jpeg"} alt="artikel" />
            <h4  className={Styles.judul}>{props.judul}</h4>
            <h4  className={Styles.tanggal}>{props.tanggal}</h4>
        </div>
    )
}

export default CardArtikel
