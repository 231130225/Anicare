import React from 'react';
import Header from "../organisms/Header";
import ProductSection from "../organisms/ProductSection";
import "./Home.css"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <ProductSection />
            </main>
        </>
    );
};

export default Home;
