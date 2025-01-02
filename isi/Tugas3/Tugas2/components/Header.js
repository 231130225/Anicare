import React from 'react'
import "./Header.css"
import Search from './Search';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className='inner-header'>
                <Nav />
                <h1 className='logo'>
                    Dribbble
                </h1>
                <Search />
            </div>
        </header>
    );
};

export default Header;