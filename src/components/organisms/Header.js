import React from 'react'
import Styles from "../../assets/styles/Header.module.css"
import ButtonSign from "../atoms/ButtonSign"
import NavigasiHeader from '../molecules/NavigasiHeader';

const Header = () => {
    return (
        <header className={Styles.header}>
            <div  className={Styles.inner}>               
                <h1  className={Styles.logo}>
                    Anicare
                </h1>
                <NavigasiHeader />
                <ButtonSign />
            </div>
        </header>
    );
};

export default Header;