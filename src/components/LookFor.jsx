import React from 'react';
import Swiper from './swiper';
import './styles.css';
// import function to register Swiper custom elements 
import { register } from 'swiper/element/bundle';
import "swiper/css";
// register Swiper custom elements
register();

function LookFor() {
    return(
        <>
            <main className="w-8/12 mx-auto space-y-4 py-20 roboto-regular">
                <h1 className="text-3xl text-black">Looking for something else?</h1>
                <p className="flex justify-between pb-4">
                    <span className="text-gray-400">Discover restaurant by type of meal</span>
                    <span className="text-lime-600"><a href="#">View all types</a></span>
                </p>
                
                    <div className="pb-20 flex space-x-5 ">
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look2.jpg" alt="LatinAmerican" className="w-40 rounded-full" /><span className="text-center">Latin American</span></div>
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look1.jpg" alt="Mexican" className="w-40 rounded-full" /><span className="text-center">Mexican</span></div>
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look5.jpg" alt="pancakes" className="w-40 rounded-full" /><span className="text-center">Pancakes</span></div>
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look4.jpg" alt="croissant" className="w-40 rounded-full" /><span className="text-center">Croissant</span></div>
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look6.jpg" alt="samosa" className="w-40 rounded-full" /><span className="text-center">Samosa</span></div>
                        <div className='flex flex-col justify-center space-y-3'><img src="http://localhost:3000/img/look3.jpg" alt="NewMexican" className="w-40 rounded-full" /><span className="text-center">New Mexican</span></div>
                    </div>
                
             
                <hr /> 

            </main>
        </>
    );
}
export default LookFor;