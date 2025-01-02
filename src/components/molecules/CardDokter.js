import React from 'react'
import Styles from "../../assets/styles/CardDokter.module.css"

const CardDokter = (props) => {
    return (
        <div className={Styles.card}>
            <img  className={Styles.foto} src={props.foto ?? "not-available.jpeg"} alt="dokter" />
            <h4  className={Styles.nama}>{props.nama}</h4>
            <h4  className={Styles.pengalaman}><span>Pengalaman: </span>{props.pengalaman}</h4>
            <h4  className={Styles.kategori}><span>Kategori: </span>{props.kategori}</h4>
        </div>
    )
}

export default CardDokter
