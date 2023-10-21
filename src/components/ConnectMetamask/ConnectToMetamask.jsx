import React, { useEffect, useState, useRef } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

import axios from 'axios';
import * as d3 from 'd3';

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');



  return (
    <div className="container" >
      <div className="jumbotron custom-jumbotron">
        <h1 className="display-5 text-center">
          Pepejack
        </h1>
        <h3 className="display-5 p-4 text-center">
          Join Telegram, Play Pepejack and Win
        </h3>

        <img src="images/pepejack.gif" width="100%" />
                    <p className="p-2">

                    <a href="https://x.com/pepejackcoin" ><i class="fab fa-twitter large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="https://t.me/pepejack" ><i class="fab fa-telegram large-icon"></i></a>

                    </p>

        <p>
        <hr className="my-2" />
        CA <a href="https://etherscan.io/token/#0xE0c74e2D189Bf5299D8CE815e91B99B22f51E2B0" >0xE0c74e2D189Bf5299D8CE815e91B99B22f51E2B0</a>
        <hr className="my-2" />
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x3af5ce47fd41ae868eb8c27ee2f3a24481ed6ab1" >Dextools</a>
        </p>

         <hr className="my-2" />
        Pepejack.com &copy; 2023 All rights reserved.
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
