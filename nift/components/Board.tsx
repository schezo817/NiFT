import { Avatar } from "@chakra-ui/react"

const Board = () => {
    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">DashBoard</h1>
                    </div> */}

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">DashBoard</h1>
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"> */}
                            {/* <form className="hidden lg:block">
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">

                                        <div className="avatar">
                                            <div className="w-48 rounded">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <div>
                                            Daiki Mori
                                        </div>

                                        <div>
                                            sheng.131216@gmail.com
                                        </div>

                                    </h3>
                                </div>
                            </form> */}

                            {/* <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://placeimg.com/192/192/people" alt="Woman's Face" />
                                <div className="text-center space-y-2 sm:text-left">
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
                            </div> */}

                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                                    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://placeimg.com/192/192/people" alt="Woman's Face" />
                                    <div className="text-center space-y-2 sm:text-left">
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


                                <div className="">
                                    <h2 className="text-md">Dahui Sheng</h2>
                                    <p>sheng.131216@gmail.com</p>
                                    <div className="">
                                        <figure className="mask mask-circle">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </figure>
                                    </div>
                                    {/* <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Remember me</span> 
                                            <input type="checkbox" className="toggle" />
                                        </label>
                                    </div> */}
                                    {/* <div className="card-body"></div> */}
                                </div>
                                <div className="divider lg:divider-horizontal" />
                                    <div className="lg:col-span-3">
                                    <div>textarea</div>
                                    <div>欲しい情報</div>
                                    <div>ユーザー画像</div>
                                    <div>名前</div>
                                    <div>メールアドレス</div>
                                    <div>持っているNFTコレクション</div>
                                    {/* 左側の設定 */}
                                    <div className="h-96 rounded-lg lg:h-full">
                                        {/* カードコンポーネント */}
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 右側のカラム */}
                            {/* <div className="lg:col-span-3">
                                <div>textarea</div> */}
                                {/* 左側の設定 */}
                                {/* <div className="h-96 rounded-lg lg:h-full">
                                    <div>text</div> */}
                                    {/* カードコンポーネント */}
                                    {/* <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Board;
