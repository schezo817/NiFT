import Link from "next/link";
import { NFT } from "types/nfts";

type NFTProps = NFT;

const NFTHomeCard = (props: NFTProps) => {
    return (
        <div className="bg-auto">
            <div className="mx-auto max-w-2xl py-4 px-2 sm:py-6 sm:px-3 lg:max-w-3xl lg:px-4">
                <Link href={`/marketplace/detail/${encodeURIComponent(props.nft_id)}`}>
                    <div>
                        <div className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={props.image_url}
                                    alt={props.nft_name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NFTHomeCard;
