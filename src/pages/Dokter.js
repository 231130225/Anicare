import React from 'react';
import Styles from "../assets/styles/Home.module.css"
import Search from '../components/atoms/Search';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import KategoriH from '../components/organisms/KategoriH';
import SectionDokterAll from '../components/organisms/SectionDokterAll';

const Dokter = () => {
    return (
        <>
            <Header />
            <main className={Styles.main}>
                <div className={Styles.cari}>
                    <p className={Styles.textklik}>temukan dokter atau kategori hewan peliharaan-mu</p><br/>
                    <Search />
                </div>
                <KategoriH />
                <SectionDokterAll />
            </main>
            <Footer />
        </>
    );
};

export default Dokter;
