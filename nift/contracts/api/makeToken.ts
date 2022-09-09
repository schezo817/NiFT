import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import artifact from "artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json";
import { NFT, NFTCreation } from "types/nfts";

const makeToken = () => {
    const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    var contract: any;
    const [states, setStates] = useState<NFT>({
        nft_id: "0",
        nft_name: "NFT Name",
        series_id: "Series ID",
        brand_name: "Brand Name",
        description: "Description",
        image_url:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 100,
        wallet_address: "0x000000",
    });

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, artifact.abi, signer);
    });

    //トークンの作成し、トークンidを返却
    const createToken: any = async () => {
        const nft_name = states.nft_name;
        const description = states.description;
        const image_url = states.image_url;
        const price = 100;
        var tokenURI: JSON = JSON.parse('{"name": [' + nft_name + '],"description": [' + description + '],"image": [' + image_url + ']}');
        const tokenid = await contract.methods.createToken(tokenURI, price);
        return tokenid;
    }
};

export default makeToken;