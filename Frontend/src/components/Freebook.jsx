import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import axios from 'axios';
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';


const Slider = SliderImport.default;
const Freebook = () => {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book")
                setBook(res.data.filter((data)=>data.price==='0 INR'))
            } catch (error) {
                console.log(error)

            }
        }
        getBook();
    }, [])

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
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Freebook
