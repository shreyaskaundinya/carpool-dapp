import React from "react";
import Image from "next/image";
import p from "../Assets/p.jpg";
import { useState, useEffect } from "react";
function LoginUser() {
  const [ethereum, setEthereum] = useState(undefined);
  const [connectedAccount, setConnectedAccount] = useState(undefined);
  const [user, setUser] = useState(null);
  const [rides, setRides] = useState([]);

  const handleAccounts = (accounts) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      // TODO : Call userExists function with the address
      // if user not exists show register form
      // console.log("We have an authorized account: ", account);
      setConnectedAccount(account);
    } else {
      // console.log("No authorized accounts yet");
    }
  };

  const getConnectedAccount = async () => {
    if (window.ethereum) {
      setEthereum(window.ethereum);
    }

    if (ethereum) {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      handleAccounts(accounts);
    }
  };
  useEffect(() => {
    getConnectedAccount();
    return () => {};
  }, []);

  const connectAccount = async () => {
    if (!ethereum) {
      alert("MetaMask is required to connect an account");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    handleAccounts(accounts);
  };

  if (!ethereum) {
    return <p>Please install MetaMask to connect to this site</p>;
  }

  if (!connectedAccount) {
    return (
      <div className="flex justify-center my-32">
        <button
          className="py-4 px-4 my-32 bg-black border-2 border-black text-white  justify-center  rounded-lg mt-6 Rubik hover:bg-white hover:text-black hover:border-black hover:border-2 transition ease-in-out duration-200 "
          onClick={connectAccount}
        >
          Connect MetaMask Wallet
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-row">
        <Image
          src={p}
          height={600}
          width={433}
          className="object-contain border-r-4 border-black"
        />
        <div className=" card flex items-center mt-10  mx-20">
          <div className="card__text">
            <h1 className="card__text--title text-6xl  mx-20 mb-6 Rubik font-bold text-[#333333]">
              Login
            </h1>
            <p className="card__text--description text-left mx-20 text-m w-96 Rubik text-[#333333]">
              Enter the Following details and then click on the "Login" Button
              to Login.
            </p>
            {/* <h2 className='text-left mx-20 mt-5 font-bold Rubik text-[#333333]'>Destination</h2> */}
            {/* input */}
            <div className="card__text--input flex flex-col items-center">
              <input
                type="text"
                className="card__text--input--text text-lg w-96 h-12 px-2 mt-6 bg-[#f6f6f6] placeholder:mx-5 focus:outline-none"
                placeholder=" Name"
              />
              <input
                type="text"
                className="card__text--input--text text-lg w-96 h-12 px-2 bg-[#f6f6f6]  mt-6 focus:outline-none"
                placeholder=" Email ID"
              />
              <input
                type="text"
                className="card__text--input--text text-lg w-96 h-12 px-2 bg-[#f6f6f6]  mt-6 focus:outline-none"
                placeholder="Car Number"
              />
              <button className="card__text--input--button w-96 h-12 bg-black border-black border-2 text-white rounded-xl mt-6 Rubik hover:bg-white hover:text-black hover:border-black hover:border-2 transition ease-in-out duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginUser;
