import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Card()
{
    return(
        <>
        <div className=" card flex items-center mt-14 max-w-6xl justify-end ">
            <div className="card__text">
                <h1 className="card__text--title text-3xl text-left mx-20 mb-6 Rubik font-bold text-[#333333]">Request a Ride</h1>
                <p className="card__text--description text-left mx-20 text-sm w-96 Rubik text-[#333333]">Fill in your location and destination and then click on the "Request a Ride" Button to request a ride.</p>
                {/* <h2 className='text-left mx-20 mt-5 font-bold Rubik text-[#333333]'>Destination</h2> */}
                {/* input */}
                <div className="card__text--input flex flex-col items-center">
                    <input type="text" className="card__text--input--text w-96 h-12 px-2 mt-6 bg-[#f6f6f6] placeholder:mx-5 focus:outline-none" placeholder=" Where from?"/>
                    <input type="text" className="card__text--input--text w-96 h-12 px-2 bg-[#f6f6f6]  mt-6 focus:outline-none" placeholder=" Where to?"/>
                    <button className="card__text--input--button w-96 h-12 bg-black text-white rounded-lg mt-6 Rubik">Request a Ride</button>
                </div>

                
            </div>
        </div>
        </>
    )

}
export default Card