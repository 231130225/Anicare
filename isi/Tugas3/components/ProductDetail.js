import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faBookmark,faUser }from '@fortawesome/free-regular-svg-icons'
import DataContent from '../Tugas2/components/DataContent';
import { Link, useParams } from 'react-router-dom';
import Styles from "./ProductDetail.module.css"

const ProductDetail = () => {
  const { productId } = useParams();
  const allProducts = DataContent();
  const product = allProducts.filter(item => item.id === parseInt(productId))[0];

  const [isloading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },5000)
    
  },[])

  return (

    <section id='products'>
            <div className={Styles.kotakContent}>
              {isloading ? (<h1 style={{lineHeight:"800px"}}>Loading...</h1>) : (
                <>
                  {product ? (
                    <>
                      <Link to={'/'} className={Styles.back}>X</Link>
                      <header className={Styles.header}>
                      <div className={Styles.inHeader}>
                          <h1 className={Styles.title}>{product.nama}</h1>
                          <FontAwesomeIcon icon={faHeart} className={Styles.likes}/>
                          <FontAwesomeIcon icon={faBookmark} className={Styles.likes}/>
                          <button className={Styles.btnh}>Get in touch</button>
                        </div>
                      </header>
                        
                        <p><img className={Styles.cover} src={product.gambar} alt="Gambar Produk" /></p>

                        <p><FontAwesomeIcon icon={faUser} className={Styles.user}/></p>
                        <h4 style={{textAlign:"center"}}>{product.nama}</h4>
                        <p>Welcome to my design portfolio on Dribbble</p>
                        <p style={{textAlign:"center", marginBottom:"50px"}}><button className={Styles.btnh}>Get in touch</button></p>

                        <h4 style={{margin:"20px"}}>More by {product.nama}</h4>
                        <div className={Styles.moreContainer}>
                          <img className={Styles.more} src={product.gambar} alt="Gambar Produk" />
                          <img className={Styles.more} src={product.gambar} alt="Gambar Produk" />
                          <img className={Styles.more} src={product.gambar} alt="Gambar Produk" />
                          <img className={Styles.more} src={product.gambar} alt="Gambar Produk" />
                        </div>                      
                    </>
                    ) : (
                      <p>Produk dengan ID {productId} tidak ditemukan.</p>
                    )}
                  </>
              )}
              
            </div>
    </section>
)
}

export default ProductDetail
