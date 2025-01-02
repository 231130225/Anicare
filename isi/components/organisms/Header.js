import React from 'react'
import ProductNavigation from "../molecules/ProductNavigation"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className='inner-header'>
                <ProductNavigation />
                <h1 className='logo'>
                    Dribbble
                </h1>
                
            </div>
        </header>
    );
};

export default Header;
