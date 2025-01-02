import React from 'react'
import Styles from "../../assets/styles/NavigasiHeader.module.css";

const NavigasiHeader = () => {
    return (
        <nav>
            <ul  className={Styles.ul}>
                <li>
                    <a  className={Styles.link} href="#products">Home</a>
                </li>
                <li>
                    <a className={Styles.link} href="#">Artikel</a>
                </li>
                <li>
                    <a className={Styles.link} href="#">Store</a>
                </li>
                <li>
                    <a className={Styles.link} href="#">About Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigasiHeader
