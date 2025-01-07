import React from 'react'
import Styles from "../../assets/styles/Header.module.css"
import ButtonSign from "../atoms/ButtonSign"
import NavigasiHeader from '../molecules/NavigasiHeader';
import logo from "../../assets/images/Anicare logo.png"

const Header = () => {
    return (
        <header className={Styles.header}>
            <div  className={Styles.inner}>               
                <h1  className={Styles.logo}>
                    <img className={Styles.logo} src={logo}/>
                </h1>
                <NavigasiHeader />
                <ButtonSign />
            </div>
        </header>
    );
};

export default Header;