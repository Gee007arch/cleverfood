import './styles.css';
function Collections() {
    return(
        <>
            <section className=' bg-gray-200'>
                <main className="w-8/12 mx-auto space-y-4 py-5 roboto-regular">
                    <h1 className="text-3xl text-black">Collections</h1>
                    <p className="flex justify-between pb-4">
                        <span className="text-gray-400">Explore curated lists based on trends</span>
                        <span className="text-lime-600"><a href="#">View all collections</a></span>
                    </p>
                    <div className='grid'>
                        <div className="pb-20 flex space-x-5 max-[770px]: col-span-5 ">
                            <div className='flex space-x-5 bg-slate-50 p-7 w-[26rem]'>
                                <div>
                                    <img src="http://localhost:3000/img/crepe.jpg" alt="" className="w-36 rounded-md" />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='font-semibold'>Truckin' Awesome</h3>
                                    <p>Find the best places for a little meal</p>
                                </div>
                            </div>
                            <div className='flex space-x-5 bg-slate-50 p-7 w-[27rem]'>
                                <div>
                                    <img src="http://localhost:3000/img/crepes.jpg" alt="" className="w-44 rounded-md" />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='font-semibold'>Super sushi</h3>
                                    <p>Classic maki-style rolls, sashimi or nigiri sushi</p>
                                </div>
                            </div>
                            <div className='flex space-x-5 bg-slate-50 p-7 w-[27rem]'>
                                <div>
                                    <img src="http://localhost:3000/img/ash.jpg" alt="" className="w-52 rounded-md" />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='font-semibold'>Gluten Free</h3>
                                    <p>Places serving the best gluten-free food near you</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                </main>
            </section>
         
        </>
    );
}
export default Collections;