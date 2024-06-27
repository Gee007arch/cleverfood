import './styles.css';
function Download() {
    return(
        <>
            <section className=' bg-image2'>
                <main className="w-8/12 mx-auto space-y-6 py-36 roboto-regular">
                    <h1 className="text-5xl text-white font-bold">Download the App</h1>
                    <p className="pb-4 text-white w-96">
                        See menus and photos for nearby restaurants and bookmark your favourite places on the go  
                    </p>

                    <div>
                        <form action="">
                            <input type="text" className="pr-52 pl-4 py-3 rounded-l-md"  placeholder="Enter your Email" />
                            <button className="bg-[#fc9312] font-medium text-white text-1xl py-3 rounded-r-md px-8">EMAIL APP LINK</button>
                        </form>
                    </div>
                  
                </main>
                <main className='bg-lime-600'>
                    <div className='w-8/12 mx-auto space-y-4 py-10 roboto-regular'>
                        <div className='flex justify-around text-white text-center text-5xl font-medium items-center'>
                            <p>24</p>
                            <p>1M+</p>
                            <p>120M</p>
                            <p>30M</p>
                        </div>
                        <div className='flex justify-around text-gray-400 items-center'>
                            <p>COUNTRY</p>
                            <p>RESTAURANTS</p>
                            <p>FOOD EVERY MONTH</p>
                            <p>BOOKMARKS</p>
                        </div>
                    </div>
                </main>
               
            </section>
          
        </>
    );
}
export default Download;