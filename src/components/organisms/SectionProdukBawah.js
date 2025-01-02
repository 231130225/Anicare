import React from 'react';
import CardProduk from "../molecules/CardProduk";
import allProducts from "../../data/product";
import Styles from "../../assets/styles/Section.module.css"

const SectionProdukBawah = () => {
    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Belanja dan berhemat<span>Lihat semua</span></h4>
            <p className={Styles.p}>Dapatkan diskon besar dari produk yang anda sukai</p>
            <div className={Styles.containerartikel}>
                {allProducts.slice(5,8).map((product) => {
                    return (
                        <CardProduk
                        key={product.id}
                        gambar={product.gambar} 
                        nama={product.nama}
                        kategori={product.kategori}
                        deskripsi={product.deskripsi}
                        ulasan={product.ulasan}
                        harga={product.harga}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default SectionProdukBawah
