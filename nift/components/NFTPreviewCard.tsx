import { useEffect, useState } from "react";
import { NFTPreview } from "types/nfts";

type NFTPreviewProps = NFTPreview;

const NFTPreviewCard = (props: NFTPreviewProps) => {
    const [imageUrl, setImageUrl] = useState("https://placehold.jp/570df8/ffffff/400x400.png?text=400x400");

    useEffect(() => {
        const exec = async () => {
            const img = new Image();
            img.src = props.image_url;
            img.onload = () => {
                setImageUrl(props.image_url);
            }
            img.onerror = () => {
                setImageUrl("https://placehold.jp/570df8/ffffff/400x400.png?text=400x400");
            }
        }
        exec();
    }, [props.image_url]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div>
                    <div className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                src={imageUrl}
                                alt={props.nft_name}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        {/* 商品説明 */}
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <span aria-hidden="true" className="absolute inset-0">
                                        {props.description}
                                    </span>
                                    <span>{props.nft_name}</span>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{props.brand_name}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">ETH {props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTPreviewCard;
