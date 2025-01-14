// import React from 'react';
// import CardProduk from "../molecules/CardProduk";
// import allProducts from "../../data/product";
// import Styles from "../../assets/styles/Section.module.css"
import React, { useState } from 'react';
import CardProduk from "../molecules/CardProduk";
import allProducts from "../../data/product";
import Styles from "../../assets/styles/Section.module.css";
import ProductDetails from '../../pages/ProductDetails';
import Molpopup from '../molecules/Molpopup';
import "../../assets/styles/ProdukDetails.css";

// const SectionProdukBawah = () => {
//     return (
//         <section className={Styles.container}>
//             <h4 className={Styles.judul}>Belanja dan berhemat<span>Lihat semua</span></h4>
//             <p className={Styles.p}>Dapatkan diskon besar dari produk yang anda sukai</p>
//             <div className={Styles.containerartikel}>
//                 {allProducts.slice(5,8).map((product) => {
//                     return (
//                         <CardProduk
//                         key={product.id}
//                         gambar={product.gambar} 
//                         nama={product.nama}
//                         kategori={product.kategori}
//                         deskripsi={product.deskripsi}
//                         ulasan={product.ulasan}
//                         harga={product.harga}
//                         />
//                     );
//                 })}
//             </div>
//         </section>
//     )
// }



const SectionProdukBawah = () => {
    const [popup, setPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product

    return (
        <section className={Styles.container}>
            <h4 className={Styles.judul}>Belanja dan berhemat<span>Lihat semua</span></h4>
            <p className={Styles.p}>Dapatkan diskon besar dari produk yang anda sukai</p>
            <div className={Styles.containerartikel}>
                {allProducts.slice(5, 8).map((product) => (
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



export default SectionProdukBawah
