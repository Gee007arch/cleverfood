import { useRef, useEffect } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import "swiper/css";
// register Swiper custom elements
register();


function Swiper() {

    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
    }, []);

    return (
        <>
        
            <swiper-container ref={swiperElRef} slides-per-view="6"  pagination="true" loop="true" speed="10000" className="max-[770px]:space-x-5">
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look2.jpg" alt="LatinAmerican" className="w-40 rounded-full" /><span className="text-center">Latin American</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look1.jpg" alt="Mexican" className="w-40 rounded-full" /><span className="text-center">Mexican</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look5.jpg" alt="pancakes" className="w-40 rounded-full" /><span className="text-center">Pancakes</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look4.jpg" alt="croissant" className="w-40 rounded-full" /><span className="text-center">Croissant</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look6.jpg" alt="samosa" className="w-40 rounded-full" /><span className="text-center">Samosa</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look3.jpg" alt="NewMexican" className="w-40 rounded-full" /><span className="text-center">New Mexican</span></div>
                </swiper-slide>

                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look5.jpg" alt="pancakes" className="w-40 rounded-full" /><span className="text-center">Pancakes</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look3.jpg" alt="NewMexican" className="w-40 rounded-full" /><span className="text-center">New Mexican</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look6.jpg" alt="samosa" className="w-40 rounded-full" /><span className="text-center">Samosa</span></div>
                </swiper-slide>
                <swiper-slide>
                    <div className='flex flex-col space-y-3'><img src="http://localhost:3000/img/look3.jpg" alt="NewMexican" className="w-40 rounded-full" /><span className="text-center">New Mexican</span></div>
                </swiper-slide>

            </swiper-container>

        </>
    );
}
export default Swiper;