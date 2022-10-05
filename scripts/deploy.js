const { ethers } = require("hardhat");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

require('dotenv').config();
const API_URL = process.env.API_URL;


const web3 = createAlchemyWeb3(API_URL);

async function main() {
  const GoerliApeCoin = await ethers.getContractFactory("GoerliApeCoin");

  // Start deployment, returning a promise that resolves to a contract object
  const amount = 1000000;
  const hello_world = await GoerliApeCoin.deploy("GoerliApeCoin", "GAPE", web3.utils.toWei(''+amount,"ether"));   
  console.log("Contract deployed to address:", hello_world.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });