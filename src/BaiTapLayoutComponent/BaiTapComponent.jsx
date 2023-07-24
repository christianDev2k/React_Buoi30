import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Featured from './Featured';
import Footer from './Footer';
import './style.scss';

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
