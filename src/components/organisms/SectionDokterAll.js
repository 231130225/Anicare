import React from 'react';
import CardDokter from "../molecules/CardDokter";
import allDokter from "../../data/Dokter";
import Styles from "../../assets/styles/Section.module.css"

const SectionDokterAll = () => {
    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Tim Dokter Spesialis Siap Melayani Anda</h4>
            <p className={Styles.p}>Konsultasi dengan Dokter Spesialis</p>
            <div className={Styles.containerdokter}>
                {allDokter.map((dokter) => {
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

export default SectionDokterAll
