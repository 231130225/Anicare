import React from 'react';
import "./Section.css"
import Suggest from './Suggest';
import Filter from './Filter';
import Content from './Content';

const Section = () => {
    return (
        <section id='judul'>
            <h2 className='title-section'>Discover the world's top <br/> designers & creatives</h2>
            <p>Dribbble is the leading destination to find & showcase creative work and <br/> home to the world's best design professionals.</p>
            <input className='s-search' placeholder='Search 18 million+ shots...'></input>

            <Suggest />
            
            <Filter />

            <Content />
        </section>
    )
}

export default Section