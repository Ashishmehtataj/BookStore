import React from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Course() {
    const [book,setBook] = useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res = await axios.get("https://bookstore1-gb7e.onrender.com/book")
               setBook(res.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        getBook();
    },[])
    return (
        <div className='max-w-screen container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}<span className='text-pink-500'>Here! :)</span></h1>
                <p className='mt-12 '>Every great journey begins with a single step, and every skill start with learning. Our courses are designed to help you gain practical knowledge, build confidence, and achieve your goals. Start today, stay consitent, and let every lesson bring you one step closer to success</p>
                <Link to='/'>
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-2xl hover:bg-pink-700 mt-6'>Back</button>
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    book.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Course
