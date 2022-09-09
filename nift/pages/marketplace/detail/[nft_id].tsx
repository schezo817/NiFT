import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { NFT } from "types/nfts";

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
                        <div className="mb-10">
                            <label htmlFor="buy-modal" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn modal-button">Buy Now</label>
                        </div>

                        {/* <!-- 購入確定 modal --> */}
                        <input type="checkbox" id="buy-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">購入を確定する場合パスワードを入力してください</h3>
                                <input type="text" placeholder="Enter your password" className="mt-3 input-bordered w-full" />
                                <button className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
