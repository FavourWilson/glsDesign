import React from 'react';
import './styles/Section.css';
import Header from './Header';
import card2 from './assets/card2-1.png';
const Section = () => {
    return ( 
        <section className='section'>
            <Header/>
            <div className='section__box'>
                <div className='section__content'>
                    <h1 className='content__header'>Secure Your Future</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elite</p>
                    <p className='small__p'>The Card Of Future</p>
                    <button>Get</button>
                    <button>Discover</button>
                </div>

                <div className='section__image'>
                    <img src={card2} alt=''/>
                </div>
            </div>
        </section>
     );
}
 
export default Section;