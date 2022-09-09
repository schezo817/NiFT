import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import artifact from "../../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json";

const makeToken = () => {
    const [msg, setMsg] = useState("");
    const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

    useEffect(() => {
        const marketItemCreatedCatch = (_tokenId: any, _seller: any, _owner: any, _price: any, _sold: any) => {
            console.log("tokenId: ", _tokenId);
            console.log("seller: ", _seller);
            console.log("owner: ", _owner);
            console.log("price: ", _price);
            console.log("sold: ", _sold);
        };
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, artifact.abi, signer);
        const filter = contract.filters.MarketItemCreated(null, null, null, null, null);
        contract.on(filter, marketItemCreatedCatch);
    }, []);

    const doMessage = async () => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, artifact.abi, signer);
        contract.message(msg);
    };

    const doChange = (e: any) => {
        setMsg(e.target.value);
    };
};

export default makeToken;