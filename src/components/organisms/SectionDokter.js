import React from 'react';
import CardDokter from "../molecules/CardDokter";
import allDokter from "../../data/Dokter";
import Styles from "../../assets/styles/Section.module.css"

const SectionDokter = () => {
    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Rekomendasi dokter untuk kamu<span>Lihat semua</span></h4>
            <p className={Styles.p}>Dokter terpercaya kami</p>
            <div className={Styles.containerdokter}>
                {allDokter.slice(0,4).map((dokter) => {
                    return (
                        <CardDokter
                        key={dokter.id}
                        foto={dokter.foto} 
                        nama={dokter.nama}
                        pengalaman={dokter.pengalaman}
                        kategori={dokter.kategori}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default SectionDokter
