import { Avatar } from "@chakra-ui/react"

const Board = () => {
    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">DashBoard</h1>
                        {/* <div>text</div> */}     
                    </div>
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <form className="hidden lg:block">
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900">
                                                Size
                                            </span>
                                            <span className="ml-6 flex items-center">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <div>

                                            </div>
                                        </button> */}

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

                            {/* 右側のカラム */}
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
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Board;
