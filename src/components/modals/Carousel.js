import React, { useEffect, createRef } from 'react';
import Slider from "react-slick";

function Carousel({ toggle, sliders }) {

    let overlay = createRef();

    const settings = {

        dots: true,

        infinite: true,

        speed: 500,

        slidesToShow: 1,

        slidesToScroll: 1,

    };

    useEffect(() => {

        // overlay.current.addEventListener('click', e => toggle());

        return () => {}

    }, [toggle, overlay]);

    return (

        <div className="fixed h-full w-full top-0 left-0 z-20 flex flex-row">

            <div className="flex-1 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center" ref={overlay}>

                <div className="bg-transparent flex flex-col px-10 md:p-10 w-screen md:max-w-3xl mx-auto  md:px-10 md:w-full">

                    <div className="flex flex-row justify-end items-center py-3">

                        <button className="text-gray-50" onClick={() => toggle()}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>

                    </div>

                    <Slider {...settings} className="">

                        {sliders.map((slider, i) => <img key={i} src={slider} className="h-82 w-full object-contain" alt="slider"/>)}

                    </Slider>

                </div>

            </div>
            
        </div>

    )

};

export default Carousel;