import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAlarm } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import React, { useState } from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
        <main className="fixed flex-shrink-0 w-full top-0 left-0 roboto-regular shadow-lg z-20">
            <nav className="bg-white text-white flex justify-around px-10 py-6 w-full items-baseline mx-auto">
                <div className="flex space-x-5 align-middle flex-shrink-0 items-center">
                    <p className="text-black font-bold text-2xl"><a href="#" >Clever<span className="text-lime-600">Food</span></a></p>
                    <p className="text-gray-400 hover:text-black max-[768px]:hidden"><a href="#" className="flex space-x-1"><CiLocationOn className="text-2xl"/><span>Choose Location</span></a></p>
                    <p className="text-gray-400 hover:text-black max-[768px]:hidden"><a href="#" className="flex space-x-1"><MdOutlineAlarm className="text-2xl"/><span>Delivery now</span></a></p>
                </div>
            
                <div>
                    <ul className="flex space-x-5 max-[800px]:hidden">
                        <li><a href="#" className="text-gray-400 hover:text-black">Login</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Register</a></li>
                        <li className="text-lime-600"><a href="#" className="flex space-x-1"><IoCartOutline className="text-2xl"/><span>Cart</span></a></li>
                    </ul>

            
                    {/*  Hamburger menu icon  */}
                    <button onClick={toggleNavbar} className="hidden text-black after:border-yellow-500 focus:outline-none  border p-1 px-3 max-md:block">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                    </svg>
                </button>          
                </div>
            </nav>
        </main>
      
            {isOpen && (
                <div className="min-[770]:hidden px-2 pt-24 pb-3 duration-1000 ease-linear" id="mobile-menu">
                    <ul className="space-y-5" data-aos="fade-down" itemID="mobile-menu">
                        <p className="text-gray-400 hover:text-black"><a href="#" className="flex space-x-1"><CiLocationOn className="text-2xl"/><span>Choose Location</span></a></p>
                        <p className="text-gray-400 hover:text-black"><a href="#" className="flex space-x-1"><MdOutlineAlarm className="text-2xl"/><span>Delivery now</span></a></p>
                        <li className="block px-3 rounded-md text-base font-medium"><a href="#" className="text-gray-400 hover:text-black">Login</a></li>
                        <li className="block px-3 rounded-md text-base font-medium"><a href="#" className="text-gray-400 hover:text-black">Register</a></li>
                        <li className="text-lime-600 block px-3 rounded-md text-base font-medium"><a href="#" className="flex space-x-1"><IoCartOutline className="text-2xl"/><span>Cart</span></a></li>
                    </ul>
                </div>
            )}
        </>
    );
}
export default NavBar;
/*

<MdOutlineAlarm />

*/