import React from 'react';
import './style.css';
import Header from './Header';
import Carousel from './Carousel';
import Featured from './Featured';
import Footer from './Footer';

const BaiTapComponent = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Featured />
            <Footer />
        </div>
    );
};

export default BaiTapComponent;
