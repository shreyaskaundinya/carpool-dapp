import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card';
import bg from '../Assets/bg-r.jpg'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
function register(){
    return(
        <>
         <Image
              layout="fill"
              objectFit="cover"
              quality={100}
              src={bg}
              alt={""}
              className='object-fill -z-50'

            />
        <div className='flex flex-row mt-14'>
        <div className='flex flex-col  '>
            <div className="text-5xl font-bold Rubik max-w-4xl mx-40 mt-10  ">Register</div>
            <div className='mx-40 mt-10  '> <input className='bg-[#f6f6f6] w-96 h-12 shadow-sm focus:outline-none px-2 placeholder:px-2 text-lg hover:border-2 hover:border-black  hover:shadow-md transition ease-in-out duration-200' type='text' placeholder='Name'></input> </div>
            <div className='mx-40 mt-5  '> <input className='bg-[#f6f6f6] w-96 h-12 shadow-sm focus:outline-none px-2 placeholder:px-2 text-lg hover:border-2 hover:border-black hover:shadow-md transition ease-in-out duration-200' type='text' placeholder='License Plate No'></input> </div>
            <div className='mx-40 mt-5  '> <input className='bg-[#f6f6f6] w-96 h-12 shadow-sm focus:outline-none px-2 placeholder:px-2 text-lg hover:border-2 hover:border-black hover:shadow-md transition ease-in-out duration-200' type='text' placeholder='Car Name and Model'></input> </div>  
        </div>
        <div className='flex flex-col'>
            <div className=' mt-[124px]  '> <input className='bg-[#f6f6f6] w-96 h-12 shadow-sm focus:outline-none px-2 placeholder:px-2 text-lg hover:border-2 hover:border-black hover:shadow-md transition ease-in-out duration-200' type='text' placeholder='Source'></input> </div>
            <div className=' mt-5 '> <input className='bg-[#f6f6f6] w-96 h-12 shadow-sm focus:outline-none px-2 placeholder:px-2 text-lg hover:border-2 hover:border-black hover:shadow-md transition ease-in-out duration-200' type='text' placeholder='Destination'></input> </div>
            <button className='mt-5 w-96 h-12 bg-black text-white rounded-xl  border-2 border-black hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition ease-in-out duration-200'> Register Ride</button>
        </div>
        </div>
        </>

    );
} export default register;