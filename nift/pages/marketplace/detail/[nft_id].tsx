import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { NFT } from "types/nfts";
import { ethers } from "ethers";
import { MakeToken } from "contracts/api/makeToken";

const Detail: NextPage = () => {
    const router = useRouter();
    const { nft_id } = router.query;

    const [detailNFT, setDetailNFT] = useState<NFT>({
        nft_id: nft_id as string,
        nft_name: "NFT Name",
        series_id: "Series ID",
        brand_name: "Brand Name",
        description: "Description",
        image_url:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 100,
        wallet_address: "0x000000",
    });
    const [isVerified, setIsVerified] = useState(false)

    const onClick = async () => {
        if (!(window as any).ethereum) {
            console.error('!window.ethereum')
            return
        }

        const provider = new ethers.providers.Web3Provider((window as any).ethereum)
        await provider.send('eth_requestAccounts', [])

        const signer = await provider.getSigner()
        const message = 'message'
        const address = await signer.getAddress()
        const signature = await signer.signMessage(message)
        const response = await fetch('/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ message, address, signature }),
        })

        const body = await response.json()
        setIsVerified(body.isVerified)

        if (body.isVerified) {
            const tokenId = MakeToken.getToken(detailNFT.nft_name, detailNFT.description, detailNFT.image_url, detailNFT.price)
        }
    }


    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* <!-- Product info --> */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={detailNFT.image_url}
                            alt="Model wearing plain white basic tee."
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    {/* <!-- Options --> */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {detailNFT.nft_name}
                        </h1>
                        <h1 className="mt-1 text-2xl tracking-tight text-gray-900 sm:text-xl">
                            {detailNFT.brand_name}
                        </h1>
                        <p className="mt-5 text-3xl tracking-tight text-gray-900">
                            ETH {detailNFT.price}
                        </p>
                        <div className="space-y-6 mt-10">
                            <p className="text-base text-gray-900">{detailNFT.description}</p>
                        </div>
                        <div className="my-10 btn btn-primary w-full" onClick={(onClick)}>Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
