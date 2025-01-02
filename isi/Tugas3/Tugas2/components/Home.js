import React from 'react';
import Header from "./Header";
import "./Home.css"
import Section from './Section';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Section />

                <button className='s-con'>Sign up to continue</button>
            </main>
            
            

            <Footer />
            <p className='copy-f'>&copy;2024 Dribble Terms Privacy Cookies <span>Jobs Designers Freelancers Tags Place Resources</span></p>

        </>
    );
};

export default Home;