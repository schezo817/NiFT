require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    networks: {
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.INFURA_KEY,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};
