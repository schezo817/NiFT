import Link from "next/link";

const Board = () => {
    return(
        // 一番大きな箱を返す。
        <div className="bg-white">
            {/* text: DashBoard */}
            <div className="min-w-fit">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>
            <img src="https://placeimg.com/192/192/people" alt="icon" className="w-20 -translate-y-6 h-24 rounded-full"/>

            {/* body: */}
            <div className="grid grid-cols-4">
                {/* プロフィールカードは、サイズがsmの時非表示 */}
                <div className="col-span-1 invisible md:visible">
                    <div className="py-8 w-64 h-256 bg-white"> {/* max-w-sm mx-auto sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 */}
                        <img className="mx-auto h-24 rounded-full" src="https://placeimg.com/192/192/people" />
                        <div className="text-center space-y-2"> {/* sm:text-left*/}
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    Erin Lindford
                                </p>
                                <p className="text-slate-500 font-medium">
                                    Product Engineer
                                </p>
                            </div>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                            <Link href={"/dashboard/nft/create"}>
                                <button className="">
                                    CreateNiFT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> {/* end of プロフィールカード */}

                {/* start of :所持しているNFT */}
                <div className="col-span-2">
                    {/* カードコンポーネント */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    </div>
                </div>{/* end of 所持しているNFT */}
            </div>
        </div>
            
    )
}

export default Board;