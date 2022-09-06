import Link from "next/link";

const NFTCard = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <Link href={"/marketplace/detail"}>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative">
                            {/* <Link href={"/marketplace/create"}>
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                        </Link> */}

                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            {/* 商品説明 */}
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$35</p>
                            </div>
                        </div>
                    {/* 商品説明 */}
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    Basic Tee
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Black</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NFTCard;
