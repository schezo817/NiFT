import { Avatar } from "@chakra-ui/react"

const Board = () => {
    return (
        <div className="bg-white">
                <main className=""> {/*max-w-7xl mx-auto */}

                    {/* DashBoard */}
                    <h1 className="px-4 text-4xl font-bold tracking-tight text-gray-900">DashBoard</h1> {/* tracking-tight：文字の間隔を狭くする。 */}


                    {/* 内容を丸ごと囲うsection */}
                    <section className="pt-6 pb-24 bg-red-800" aria-labelledby="products-heading" > {/* pb-24 */}
                        {/*  */}
                            <div className="bg-slate-600"> {/* flex row-auto w-full：　　flex-col lg:flex-row */}
                                {/* 左側のコラム ：大きさ1/4 背景色：bg-slate-100 */}
                                
                                <div className="basis-1/4"> {/* bg-slate-100 */}
                                    {/* プロフィールコンポーネントについて */}
                                    <div className="py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 "> {/* max-w-sm mx-auto sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 */}
                                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://placeimg.com/192/192/people" alt="Woman's Face" />
                                        <div className="text-center space-y-2 sm:text-left"> {/* sm:text-left*/}
                                            <div className="space-y-0.5">
                                                <p className="text-lg text-black font-semibold">
                                                    Erin Lindford
                                                </p>
                                                <p className="text-slate-500 font-medium">
                                                    Product Engineer
                                                </p>
                                            </div>
                                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                                        </div>
                                    </div>
                                </div>


                                {/* 左側の設定 */}
                                <div className="">
                                    {/* gridの設定 */}
                                    <div className="grid grid-cols-4 gap-4 rounded-lg">{/*グリッドにした方が良い。lg:h-full"*/}
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
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </section>
                </main>
        </div>
    );
};

export default Board;
