import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CardV2()
{
    return(
        <>
        <div className=" card flex items-center mt-14 max-w-6xl  ">
            <div className="card__text">
                <h1 className="card__text--title text-4xl  mx-20 mb-6 Rubik font-bold text-[#333333]">Rides Available</h1>
                {/* <p className="card__text--description text-left mx-20 text-sm w-96 Rubik text-[#333333]">Fill in your location and destination and then click on the "Request a Ride" Button to request a ride.</p> */}
                {/* <h2 className='text-left mx-20 mt-5 font-bold Rubik text-[#333333]'>Destination</h2> */}
                {/* input */}
                <div className="card__text flex flex-row mx-20 Rubik text-lg  ">
                    <div className='flex flex-col '>
                        <div className='flex flex-row my-1'><p className='font-bold'>Drivers Name : </p><p> Shreyas Kaundinya</p></div>
                        <div className='flex flex-row my-1'><p className='font-bold'>Car Model : </p><p> BMW Model X - Silver</p></div>
                        <div className='flex flex-row my-1'><p className='font-bold'>Licence Plate No. : </p><p> KA9069HB71</p></div>
                        <div className='flex flex-row my-1'><p className='font-bold'>Seats Left : </p><p> 4</p></div>
                        <div className='flex flex-row'>
                        <input type="text" className="card__text--input--text w-52 h-12 px-2 mt-6 mr-10 bg-[#f6f6f6]  focus:outline-none" placeholder=" Where from?"/>
                        <input type="text" className="card__text--input--text w-52 h-12 px-2 bg-[#f6f6f6]  mt-6 focus:outline-none" placeholder=" Where to?"/> 

                        </div>
                    </div>
                    <button className="card__text--input--button w-72 h-12 bg-black text-white rounded-lg mt-6 Rubik">Request a Ride</button>
                </div>

                
            </div>
        </div>
        </>
    )

}
export default CardV2