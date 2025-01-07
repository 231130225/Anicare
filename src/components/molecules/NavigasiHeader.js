import React from 'react'
import Styles from "../../assets/styles/NavigasiHeader.module.css";
import { useNavigate } from 'react-router-dom';

const NavigasiHeader = () => {
    const navigate = useNavigate();

    const home = () => {
      navigate('/');
    };
    const store = () => {
      navigate('/store');
    };
    return (
        <nav>
            <ul  className={Styles.ul}>
                <li>
                    <a  className={Styles.link} onClick={home}>Home</a>
                </li>
                <li>
                    <a className={Styles.link} href="#">Artikel</a>
                </li>
                <li>
                    <a className={Styles.link} onClick={store}>Store</a>
                </li>
                <li>
                    <a className={Styles.link} href="#">About Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigasiHeader
