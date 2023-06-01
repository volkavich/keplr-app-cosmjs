import React from "react";
import getBalance from "../functions/getBalance";
import "./getBalanceButton.css";
import keplrIcon from "../Keplr_icon_ver.1.3_2.svg";

const GetBalanceButton = () => {
  return (
    <div>      
        <button className="button" onClick={getBalance}> <img src={keplrIcon} alt="logo" /> Get Balance</button>
    </div>
  
  );
};

export default GetBalanceButton;