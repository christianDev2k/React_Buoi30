import React from 'react';

const Carousel = () => {
    return (
        <div className='carousel bg-light container mt-5 mb-5 p-5 text-center rounded-2'>
            <div className='m-5'>
                <h1 className='display-5 fw-bold mb-2'>A warm welcome!</h1>
                <p className='mb-3 fs-4'>
                    Bootstrap utility classes are used to create this jumbotron since the old component has been removed
                    from the framework. Why create custom CSS when you can use utilities?
                </p>
                <a href='index.html' className='btn btn-lg btn-primary'>
                    Call to action
                </a>
            </div>
        </div>
    );
};

export default Carousel;
