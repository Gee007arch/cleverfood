import './styles.css';
function Showcase() {
     return(
        <>
        <main className='roboto-regular'>
            <div className="bg-slideshow lg:pl-64 space-y-8 py-52 max-lg:justify-center max-lg:flex max-lg:flex-col">
                <div className="space-y-2">
                    <h1 className="text-6xl text-white font-bold">Hungry?</h1>
                    <p className="text-1xl text-gray-400 font-semibold">Let's order food near you..</p>
                </div>

                <div>
                    <form action="">
                        <input type="text" className="pr-64 pl-4 py-3 rounded-l-md"  placeholder="Search for restaurants or dishes" />
                        <button className="bg-lime-600 font-medium text-white text-1xl py-3 rounded-r-md px-8">FIND RESTAURANTS</button>
                    </form>
                </div>
            </div>
        </main>

     
        
        </>
    );
}
export default Showcase;
