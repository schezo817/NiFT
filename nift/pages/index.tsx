import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-800 to-pink-500 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <div>
                            <span className="box-decoration-clone bg-gradient-to-r text-5xl font-bold from-indigo-400 to-pink-500 leading-normal">
                                NiFT | a gift with NFT
                            </span>
                            <p className="py-6">Buy and sell NFT gifts.</p>
                            <div>
                                <Link href={"/marketplace"}>
                                    <button className="btn btn-primary">Go MarketPlace</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
