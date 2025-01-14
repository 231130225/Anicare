import React, { useState } from 'react';
import Styles from '../assets/styles/Atom.module.css';
import "../assets/styles/ProdukDetails.css";


const ProductDetails = ({ product }) => {
    // const [Item,Setitem]= useState(0)
    // const [Harga,setHarga] = useState(0)
    // const[Invisible, setInvisible] = useState(false)
    // const Total = Item * Harga

    if (!product) {
        return <div className="error">Product not found!</div>;
    }

    return (
        <div className='containers'>
            <div className="topSection">
                <div className="leftSection">
                    <img src={product.gambar} alt={product.nama} />
                </div>
                <div className="rightSection">
                    <div className="top-side">
                        <h1>{product.nama}</h1>
                        <h2>Rp. {product.harga}</h2>
                    </div>
                    <div className="bottom-side">
                        <h3>Deskripsi Produk:</h3>
                        <p>{product.deskripsi}</p>
                    </div>
                    <div className="btn">
                        <button className={Styles.orangeUbah}>Beli Sekarang</button>
                        {/* <button className={Styles.putihsedang} onClick={handleClick}>bahkan ke keranjang</button> */}
                        {/* {Invisible ? <Keranjang item={Item} total={Total} /> : ""} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
