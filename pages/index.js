import Image from "next/image";

import Navbar from "@/components/Navbar";
import CardV2 from "@/components/CardV2";
import Card from "@/components/Card";
import StarRating from "@/components/StarRating";
import bg from "../Assets/bg.jpg";

import { useState, useEffect } from "react";

export default function Home() {
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
      
      <Image className="-z-50 absolute bg-repeat object-cover" src={bg} />
      <p>Connected Account: {connectedAccount}</p>
      <CardV2 />
      <CardV2 />
      <CardV2 />
      <CardV2 />
      {/* <Card /> */}
    </>
  );
}
