import { NFTMarketPlace } from "../NFTMarketPlace.sol";
import { ethers } from "ethers";


class makeToken {
    private nmp: any;
    constructor() {
        this.nmp = new NFTMarketPlace("NiFTItem", "NIFI");
    }

    public getToken(name: String, description: String, imageurl: String, price: number): String {
        var json = '{"name": [' + name + '],"description": [' + description + '],"image": [' + imageurl + ']}';
        var tokenURI = JSON.parse(json);
        const tokenid = this.nmp.createToken(tokenURI, price);
        return tokenid;
    }

    public exhibitToken(tokenId: string): void {
        this.nmp.createMarketSale(tokenId);
    }

    public sellToken(tokenId: string, price: number): void {
        this.nmp.createMarketItem(tokenId, price);
    }
}

export const MakeToken = new makeToken();
