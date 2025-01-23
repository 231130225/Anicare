import React, { useState } from 'react';
import CardDokter from "../molecules/CardDokter";
import allDokter from "../../data/Dokter";
import DetailDokter from '../../pages/DetailDokter';
import Molpopup from '../molecules/Molpopup';
import Styles from "../../assets/styles/Section.module.css"

const SectionDokter = () => {
    const [popup, setPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Tim Dokter Spesialis Siap Melayani Anda</h4>
            <p className={Styles.p}>Konsultasi dengan Dokter Spesialis</p>
            <div className={Styles.containerdokter}>
                {allDokter.slice(0, 4).map(dokter => (
                    <div key={dokter.id}>
                        <div
                            onClick={() => {
                                setSelectedProduct(dokter);
                                setPopup(true);
                            }}
                        >
                            <CardDokter
                                foto={dokter.foto} 
                                nama={dokter.nama}
                                pengalaman={dokter.pengalaman}
                                kategori={dokter.kategori}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Molpopup trigger={popup} setTrigger={setPopup}>
                {selectedProduct ? (
                    <DetailDokter dokter={selectedProduct} /> // Pass product as prop
                ) : (
                    <h1>No Product Selected</h1>
                )}
            </Molpopup>
        </section>
    )
}

export default SectionDokter
