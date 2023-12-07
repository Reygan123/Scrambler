import React from 'react';
import Whatsapp from "../assets/whatsapp.png"
import Shopee from "../assets/shopee.png"
import Email from "../assets/email.png"
import Map from "../assets/map.png"
import Instagram from "../assets/instagram-logo.png"

function Footer() {
    return (
        <section className="p-4 sm:p-4 md:p-6 lg:p-10 2xl:p-10 bg-white h-fit">
            <div className="flex justify-center font-bold text-xs sm:text-md md:text-lg lg:text-lg">
                <div className="mr-2 md:mr-20 lg:mr-32 2xl:mr-32">
                    <h3 className=''>CONTACT US</h3>
                    <a className="flex cursor-pointer mb-2 mt-2" href="#">
                        <img className="w-6 h-6 mr-2" src={Whatsapp} alt="" />
                        <p className=' '>085861021076</p>
                    </a>
                    <a className="flex cursor-pointer mb-2" href="#">
                        <img className="w-6 h-6 mr-2" src={Email} alt="" />
                        <p className=' '>screamble@gmail.com</p>
                    </a>
                    <a className="flex cursor-pointer mb-2" href="#">
                        <img className="w-6 h-6 mr-2" src={Map} alt="" />
                        <p className=' '>screamble</p>
                    </a>
                </div>
                <div className="mr-2 md:mr-20 lg:mr-32 2xl:mr-32">
                    <h3 className=''>AVAILABLE ON</h3>
                    <a className="flex cursor-pointer mb-2 mt-2" href="#">
                        <img className="w-6 h-6 mr-2" src={Shopee} alt="" />
                        <p className=' '>Shopee</p>
                    </a>
                </div>
                <div>
                    <h3 className=''>FOLLOW US</h3>
                    <a className="flex cursor-pointer mb-2 mt-2" href="#">
                        <img className="w-6 h-6 mr-2" src={Instagram} alt="" />
                        <p className=' '>Instagram</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
