import React from "react";
import Link from "next/link";
import Image from "next/image";
import user1 from "../Assets/user1.jpeg";
import k from "../Assets/k.jpg";
import StarRating from "./StarRating";
import ReactStars from "react-stars";
function CardV2() {
  return (
    <>
      <div className=" card items-center mt-14 max-w-3xl mx-auto rounded-xl py-6 bg-white shadow-md hover:shadow-lg transition ease-in-out duration-200">
        <div className="flex flex-row">
          <div>
            <Image
              src={k}
              alt="image description"
              width={100}
              height={100}
              className="rounded-full object-fit mx-10 border-2 border-black my-3"
            />
          </div>
          <div className="flex flex-col my-2 ">
            <div className="font-bold">Shreyas Kaundinya</div>
            <div className="">KA96969S3X</div>
            <div className="pb-1">White BMW X5</div>
            <div className="flex flex-row">
              <div className=" bg-[#CDF0EA] text-black rounded-xl mr-2  px-4 py-0.5 flex flex-row">
                <p>2</p><p className="font-bold">/4</p>
              </div>
              <div className=" bg-[#CDF0EA] text-black rounded-xl mr-2  px-2 py-0.5 flex flex-row">
                <p className="font-bold">Source: </p>
                <p className="mx-2">Source</p>
              </div>
              <div className=" bg-[#CDF0EA] text-black rounded-xl mr-2  px-2 py-0.5 flex flex-row">
                <p className="font-bold">Destination: </p>
                <p className="mx-2">Destination</p>
              </div>
            </div>
            
          </div>
          <div>
            <button className="bg-black text-white rounded-lg py-3 px-7 my-5 border-2 border-black hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition ease-in-out duration-200  ">Book Ride</button>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default CardV2;
