import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const getEthereumObject = () => window.ethereum;

const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      alert("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

function MetamaskConnect() {
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getAccount = async () => {
    const account = await findMetaMaskAccount();
    if (account !== null) {
      setCurrentAccount(account);
    }
  };

  useEffect(() => {
    getAccount();
  }, [currentAccount]);

  return (
    <div className="text-white ml-auto">
      {currentAccount ? (
        `Connected with ${currentAccount}`
      ) : (
        <button
          variant="contained"
          onClick={connectWallet}
          className=" rounded-md p-2 bg-purple-500 text-white"
        >
          Connect with Metamask
        </button>
      )}
    </div>
  );
}

export default MetamaskConnect;
