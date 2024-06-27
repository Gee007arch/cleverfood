import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import './styles.css';
function Footer() {
    return(
        <>
            <main className="w-8/12 mx-auto space-y-4 py-3 roboto-regular">
                <div className='flex m-6 justify-between p-10 space-x-10'>
                    <div className="space-y-5">
                        <p className="text-black font-bold text-2xl"><a href="#" >Clever<span className="text-lime-600">Food</span></a></p>
                        <p className="flex space-x-2 text-2xl">
                            <span><RiFacebookFill /></span>
                            <span><FaInstagram /></span>
                            <span><FiTwitter /></span>
                        </p>
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-medium text-1xl pb-2'>About Clever Food</h2>
                        <p><a href="#" className='text-gray-400 hover:underline'>About Us</a></p>
                        <p><a href="#" className='text-gray-400 hover:underline'>Read our blog</a></p>
                        <p><a href="#" className='text-gray-400 hover:underline'>Contact Us</a></p>
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-medium text-1xl pb-2'>Doing Business</h2>
                        <p><a href="#" className='text-gray-400 hover:underline'>Signup to Delivery</a></p>
                        <p><a href="#" className='text-gray-400 hover:underline'>Be a partner restaurant</a></p>
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-medium text-1xl pb-2'>Get Help</h2>
                        <p><a href="#" className='text-gray-400 hover:underline'>Read FAQs</a></p>
                        <p><a href="#" className='text-gray-400 hover:underline'>Account Detail</a></p>
                        <p><a href="#" className='text-gray-400 hover:underline'>View all cities</a></p>
                    </div>

                    <div className='space-y-3 flex flex-col'>
                        <button className='bg-gray-800 hover:bg-gray-900 text-white rounded-md p-2 flex flex-col items-center'>Download from <span className="flex space-x-2"><f>Google Play</f><FaGooglePlay className="text-2xl"/></span></button>
                        <button className=' bg-gray-200 hover:bg-gray-300 flex flex-col p-2 w-52 items-center'>Download from <span className="flex space-x-2"><FaApple className="text-2xl"/><f>Apple Store</f></span></button>
                    </div>
                </div>
          
              <p className='text-center'>© 2024 Delivery Services Company. All rights reserved.</p>
            </main>
        </>
    );
}
export default Footer;