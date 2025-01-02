import React from 'react'
import Styles from "../../assets/styles/CardProduk.module.css"

const CardProduk = (props) => {
    return (
        <div className={Styles.card}>
            <h4  className={Styles.kategori}>{props.kategori}</h4>
            <img  className={Styles.gambar} src={props.gambar ?? "not-available.jpeg"} alt="produk" />
            <h4  className={Styles.nama}>{props.nama}</h4>
            <h4  className={Styles.ulasan}>4* ({props.ulasan})</h4>
            <h4  className={Styles.harga}>Rp. {props.harga}</h4>
        </div>
    )
}

export default CardProduk
