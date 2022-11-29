import React from 'react';
import Logo from '../../../Assets/logo.png';

const Footer = () => {
    return (
        <div className=" bg-linear-pink-invert pb-12">
        <div className="mx-auto container pt-20 lg:pt-20 flex flex-col items-center justify-center">
            <div>
                <img className='w-16' src={Logo} alt='Logo'/>
            </div>
            <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                <h1 className="text-2xl font-black">Old Friends</h1>
                <div className="my-6 text-base text-color f-f-l">
                    <ul className="md:flex items-center">
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Home</li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Blog</li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Products</li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Login</li>
                    </ul>
                </div>
                <div className="text-sm text-color mb-10 f-f-l">
                    <p> © 2022 Old Friends. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;