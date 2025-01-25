import React, { useState } from 'react'
import Styles from "../../assets/styles/NavigasiHeader.module.css";
import { useNavigate } from 'react-router-dom';
import About from '../../pages/About';

const NavigasiHeader = () => {
    const navigate = useNavigate();

    const home = () => {
      navigate('/');
    };
    const store = () => {
      navigate('/store');
    };
    const [popup, setPopup] = useState(false);
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
                    <a className={Styles.link} onClick={() => {setPopup(true)}}>About Us</a>
                </li>
            </ul>
            <About trigger={popup} setTrigger={setPopup} />
        </nav>
    )
}

export default NavigasiHeader
