import React from 'react';
import Styles from "../assets/styles/Home.module.css"
import StylesA from "../assets/styles/Atom.module.css"
import Search from '../components/atoms/Search';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import SectionProdukAtas from '../components/organisms/SectionProdukAtas';
import SectionProdukBawah from '../components/organisms/SectionProdukBawah';
import KategoriP from '../components/organisms/KategoriP';

const Store = () => {
    return (
        <>
            <Header />
            <main className={Styles.main}>
                <div className={Styles.klikkiri}>
                    <p className={Styles.textklik}>Cari perlengkapan untuk hewan perliharaan-mu</p><br/>
                    <Search />
                    <img className={Styles.gambarkiri} src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-tiny-veterinarians-examining-dog-flat-vector-illustration-png-image_6319575.png' />
                </div>
                <KategoriP />
                <SectionProdukAtas />
                <div className={Styles.klik}>
                    <p className={Styles.textklik}>Pilihan spesialis untuk anda</p><br/>
                    <p className={Styles.isiklik}>Dipilih oleh dokter spesialis</p><br/>
                    <button className={StylesA.bening}>Lihat koleksi</button>
                    <img className={Styles.gambar} src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-veterinary-clinic-doctor-examining-png-image_4760884.png' />
                </div>
                <SectionProdukBawah />
            </main>
            <Footer />
        </>
    );
};

export default Store;
