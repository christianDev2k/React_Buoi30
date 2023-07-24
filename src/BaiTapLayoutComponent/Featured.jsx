import React from 'react';

const FeatureItem = ({ icon, title, text }) => (
    <div className='card border-0 bg-light px-5 pb-5 mb-5 text-center rounded-2'>
        <div className='icon-wrapper bg-primary text-white rounded-3 fs-2 d-flex align-items-center justify-content-center mx-auto'>
            <i className={icon}></i>
        </div>
        <h1 className='fs-4 fw-bold mb-2'>{title}</h1>
        <p className='mb-0'>{text}</p>
    </div>
);

const Featured = () => {
    return (
        <div className='container-lg'>
            <div className='row'>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-solid fa-pager'
                        title='Fresh new layout'
                        text="With Bootstrap 5, we've created a fresh new layout for this template!"
                    />
                </div>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-solid fa-cloud-arrow-down'
                        title='Feature boxes'
                        text="We've created some custom feature boxes using Bootstrap icons!"
                    />
                </div>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-solid fa-file-lines'
                        title='Simple clean code'
                        text='We keep our dependencies up to date and squash bugs as they come!'
                    />
                </div>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-brands fa-bootstrap'
                        title='A name you trust'
                        text='Start Bootstrap has been the leader in free Bootstrap templates since 2013!'
                    />
                </div>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-solid fa-code'
                        title='Fresh new layout'
                        text="With Bootstrap 5, we've created a fresh new layout for this template!"
                    />
                </div>
                <div className='col-4 pt-4'>
                    <FeatureItem
                        icon='fa-regular fa-circle-check'
                        title='Fresh new layout'
                        text="With Bootstrap 5, we've created a fresh new layout for this template!"
                    />
                </div>
            </div>
        </div>
    );
};

export default Featured;
