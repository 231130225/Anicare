import React from 'react';
import CardArtikel from "../molecules/CardArtikel";
import allArtikel from "../../data/Artikel";
import Styles from "../../assets/styles/Section.module.css"

const SectionArtikel = () => {
    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Rekomendasi Artikel untuk kamu</h4>
            <p className={Styles.p}>Informasi untuk hewan peliharaan hanya untuk-mu</p>
            <div className={Styles.containerdokter}>
                {allArtikel.slice(5,8).map((artikel) => {
                    return (
                        <CardArtikel
                        key={artikel.id}
                        foto={artikel.foto} 
                        judul={artikel.judul}
                        tanggal={artikel.tanggal}
                        kategori={artikel.kategori}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default SectionArtikel
