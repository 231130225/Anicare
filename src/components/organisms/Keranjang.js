import React from 'react'
import "../../assets/styles/Keranjang.css"
import Styles from "../../assets/styles/Atom.module.css"
const Keranjang = (props) => {
    
  return (
    <div className='ker-con'>
        <div className='kiri'>
            <div>
                <h2>{props.item} Item</h2>
            </div>
            <div className='batas'><span>.</span></div>
            <div className='bagian-harga'>
                <p>Perkiraan Harga</p>
                <h3>Rp. {props.total}</h3>
            </div>
        </div>
        <div className='kanan'>
            <button className={Styles.putihsedang}>Beli Sekarang</button>
        </div>
    </div>

  )
}

export default Keranjang