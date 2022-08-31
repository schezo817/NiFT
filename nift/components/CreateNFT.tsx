import NextLink from "next/link";
import { RiImageAddLine } from "react-icons/ri";


const CreateNFT = () => {
    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Create NFTs</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed publicly so be careful what you
                            Create.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0 p-4">
                    <div className="shadow-xl sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-4 bg-white px-4 py-5 sm:p-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Image
                                </label>
                                <div className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <RiImageAddLine className="mx-auto text-5xl text-gray-400" />
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a .jpeg file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500">JPG up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    NFT Name
                                </label>
                                <input type="text" placeholder="名前を入力" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="説明を入力"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Amount
                                </label>
                                <input type="text" placeholder="発行枚数を入力" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                作成
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNFT;
