import React from 'react';
import Styles from "../assets/styles/Home.module.css"
import StylesA from "../assets/styles/Atom.module.css"
import SectionDokter from '../components/organisms/SectionDokter';
import Search from '../components/atoms/Search';
import Header from '../components/organisms/Header';
import Fitur from '../components/organisms/Fitur';
import SectionArtikel from '../components/organisms/SectionArtikel';
import Footer from '../components/organisms/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main className={Styles.main}>
                <div className={Styles.klik}>
                    <p className={Styles.textklik}>Cari dokter atau produk untuk perliharaan-mu</p><br/>
                    <Search />
                    <img className={Styles.gambar} src='https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-veterinarian-examining-pet-dog-veterinary-png-image_6021136.png' />
                </div>
                <Fitur />
                <SectionDokter />
                <div className={Styles.klik}>
                    <p className={Styles.textklik}>Tentang kami</p><br/>
                    <p className={Styles.isiklik}>Website berisi konsultasi dengan dokter hewan, berita seputar hewan, artikel pemeliharaan hewan dan masih banyak lagi</p><br/>
                    <button className={StylesA.orangesedang}>Pelajari selengkapnya</button>
                    <img className={Styles.gambar} src='https://png.pngtree.com/png-vector/20221016/ourmid/pngtree-veterinarian-clinic-vet-pet-doctor-png-image_6307564.png' />
                </div>
                <SectionArtikel />
            </main>
            <Footer />
        </>
    );
};

export default Home;
