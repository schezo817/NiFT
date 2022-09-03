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

                            <div className="flex flex-col w-full lg:flex-row">
                                <form className="hidden lg:block">
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
                                </form>
                                <div className="divider lg:divider-horizontal" />
                                    <div className="lg:col-span-3">
                                    <div>textarea</div>
                                    {/* 左側の設定 */}
                                    <div className="h-96 rounded-lg lg:h-full">
                                        <div>text</div>
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
