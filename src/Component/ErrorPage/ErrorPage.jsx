import React from 'react';
import img from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center '>
            <img src={img} alt="" />
        </div>
    );
};

export default ErrorPage;