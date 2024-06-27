import { MdOutlineAlarm } from "react-icons/md";
import './styles.css';
function SpecialOffers() {
    return(
        <>
            <main className="w-8/12 mx-auto space-y-4  roboto-regular">
                <h1 className="text-3xl text-black">Special Offers</h1>
                <p className="flex justify-between pb-4">
                    <span className="text-gray-400">Provided by local restaurantsl</span>
                    <span className="text-lime-600"><a href="#">View all offers</a></span>
                </p>
                <div className="pb-20 flex space-x-5">
                   <div className="shadow-2xl space-y-7 rounded-xl">
                        <div>
                            <img src="http://localhost:3000/img/crepe.jpg" alt="" className="w-[22rem] rounded-lg hover:scale-100" />
                        </div>
                        <div className="m-5 space-y-3">
                            <h1 className="text-black text-1xl font-bold">Jack in the box</h1>
                            <div className="flex justify-between text-gray-400">
                                <p>Dinner</p>
                                <p>Mexican</p>
                            </div>
                            <hr />
                            <div className="flex justify-between pb-7">
                                <p className="text-lime-600 flex space-x-1"><img src="http://localhost:3000/img/star.png" alt="" className="w-5 h-5" /><span>4.5</span></p>
                                <p className="flex space-x-1"><MdOutlineAlarm className="text-2xl" /><span className="text-gray-400">30 Mins</span></p>
                            </div>
                        </div>                    
                   </div>

                   <div className="shadow-2xl space-y-7 rounded-xl">
                        <div>
                            <img src="http://localhost:3000/img/pies.jpg" alt="" className="w-[22rem] rounded-lg" />
                        </div>
                        <div className="m-5 space-y-3">
                            <h1 className="text-black text-1xl font-bold">La Mascota Bc</h1>
                            <div className="flex justify-between text-gray-400">
                                <p>Breakfast</p>
                                <p>American</p>
                            </div>
                            <hr />
                            <div className="flex justify-between pb-7">
                                <p className="text-lime-600 flex space-x-1"><img src="http://localhost:3000/img/star.png" alt="" className="w-5 h-5" /><span>4.5</span></p>
                                <p className="flex space-x-1"><MdOutlineAlarm className="text-2xl" /><span className="text-gray-400">30 Mins</span></p>
                            </div>
                        </div>                    
                   </div>

                   <div className="shadow-2xl space-y-7 rounded-xl">
                        <div>
                            <img src="http://localhost:3000/img/whipcream.jpg" alt="" className="w-[22rem] rounded-lg" />
                        </div>
                        <div className="m-5 space-y-3">
                            <h1 className="text-black text-1xl font-bold">Space Market</h1>
                            <div className="flex justify-between text-gray-400">
                                <p>Dinner</p>
                                <p>American</p>
                            </div>
                            <hr />
                            <div className="flex justify-between pb-7">
                                <p className="text-lime-600 flex space-x-1"><img src="http://localhost:3000/img/star.png" alt="" className="w-5 h-5" /><span>4.5</span></p>
                                <p className="flex space-x-1"><MdOutlineAlarm className="text-2xl" /><span className="text-gray-400">30 Mins</span></p>
                            </div>
                        </div>                    
                   </div>
                </div>
                <hr />
            </main>
        </>
    );
}
export default SpecialOffers;
 