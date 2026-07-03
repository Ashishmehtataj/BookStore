import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import Cards from './Cards';

const Slider = SliderImport.default;
const Freebook = () => {
    const filterdata = list.filter((data) => data.price === "0 INR")
    var settings = {
        dots: true,
        infinite: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
                <p>Discover knowledge without limits -- free books inspire growth, creativity, and endless learning opportunities daily. Grab your copy today and start exploring ideas that inspire growth, creativity, and lifelong learning.</p>


                <div>
                    <Slider {...settings}>
                        {filterdata.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Freebook
