import { useState, useEffect } from "react";
import { ethers } from "ethers";
import artifact from "artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json";
import { NFT, NFTCreation } from "types/nfts";

const makeToken = () => {
    const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
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
        var tokenURI: JSON = JSON.parse(
            '{"name": [' +
                nft_name +
                '],"description": [' +
                description +
                '],"image": [' +
                image_url +
                "]}",
        );
        const tokenid = await contract.methods.createToken(tokenURI, price);
        return tokenid;
    };

    const marketSale = async () => {
        const tokenId = states.nft_id;
        await contract.methods.createToken(tokenId);
    };

    const sellToken = async () => {
        const tokenId = states.nft_id;
        const price = states.price;
        await contract.methods.resellToken(tokenId, price);
    };

    const changeData = (
        nft_id: string,
        nft_name: string,
        series_id: string,
        brand_name: string,
        description: string,
        image_url: string,
        price: number,
        wallet_address: string,
    ) => {
        states.nft_id = nft_id;
        states.nft_name = nft_name;
        states.series_id = series_id;
        states.brand_name = brand_name;
        states.description = description;
        states.image_url = image_url;
        states.price = price;
        states.wallet_address = wallet_address;
    };

    const getMyNFTs: any = async () => {
        const myNFTs = await contract.methods.MyNFTs();
        return myNFTs;
    };

    const getMarketNFTs: any = async () => {
        const marketNFTs = await contract.methods.fetchMarketItems();
        return marketNFTs;
    };
};

export default makeToken;
