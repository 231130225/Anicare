import React, { useState } from 'react';
import CardProduk from "../molecules/CardProduk";
import allProducts from "../../data/product";
import Styles from "../../assets/styles/Section.module.css";
import ProductDetails from '../../pages/ProductDetails';
import Molpopup from '../molecules/Molpopup';
import "../../assets/styles/ProdukDetails.css";

const SectionProdukAtas = () => {
    const [popup, setPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product

    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Direkomendasikan untuk anda<span>Lihat semua</span></h4>
            <p className={Styles.p}>produk untuk hewan peliharaan hanya untuk-mu</p>
            <div className={Styles.containerartikel}>
                {allProducts.slice(0, 3).map((product) => (
                    <div key={product.id}>
                        <div
                            onClick={() => {
                                setSelectedProduct(product);
                                setPopup(true);
                            }}
                        >
                            <CardProduk
                                gambar={product.gambar}
                                nama={product.nama}
                                kategori={product.kategori}
                                deskripsi={product.deskripsi}
                                ulasan={product.ulasan}
                                harga={product.harga}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Molpopup trigger={popup} setTrigger={setPopup}>
                {selectedProduct ? (
                    <ProductDetails product={selectedProduct} /> // Pass product as prop
                ) : (
                    <h1>No Product Selected</h1>
                )}
            </Molpopup>
        </section>
    );
};

export default SectionProdukAtas;
