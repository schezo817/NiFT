import { NextPage } from "next";
import React, { useEffect, useState } from "react";

import { NFTCreation } from "types/nfts";
import NFTPreviewCard from "components/NFTPreviewCard";

const Create: NextPage = () => {

    const [states, setStates] = useState<NFTCreation>({
        nft_name: "",
        brand_name: "",
        description: "",
        total_lots: 0,
        rare_lots: 0,
        veryrare_lots: 0,
        common_image_url: "",
        rare_image_url: "",
        veryrare_image_url: "",
        royalty: "0.0"
    });

    const handleState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStates({ ...states, [name]: value });
    }


    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="mt-5 px-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">NFTを作成</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            プレビュー
                        </p>
                        <NFTPreviewCard
                            nft_name={states.nft_name}
                            brand_name={states.brand_name}
                            description={states.description}
                            image_url={states.common_image_url}
                            price={100}
                        />
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0 p-4">
                    <div className="shadow-xl sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-4 bg-white px-4 py-5 sm:p-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    表示する名前
                                </label>
                                <input
                                    type="text"
                                    value={states.nft_name}
                                    name={"nft_name"}
                                    onChange={(e) => { handleState(e) }}
                                    placeholder="名前を入力"
                                    className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ブランド名
                                </label>
                                <input
                                    type="text"
                                    value={states.brand_name}
                                    name={"brand_name"}
                                    onChange={(e) => { handleState(e) }}
                                    placeholder="ブランド名を入力"
                                    className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    説明
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        value={states.description}
                                        name={"description"}
                                        onChange={(e) => { handleState(e) }}
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="説明を入力"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
                                <div className="flex-none">
                                    <label className="block text-sm font-medium text-gray-700">
                                        全体の発行枚数
                                    </label>
                                    <input
                                        type="number"
                                        value={states.total_lots}
                                        name={"total_lots"}
                                        onChange={(e) => { handleState(e) }}
                                        min={0}
                                        max={1000}
                                        placeholder="全体の発行枚数を入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Commonで表示する画像のURL
                                    </label>
                                    <input
                                        type="text"
                                        value={states.common_image_url}
                                        name={"common_image_url"}
                                        onChange={(e) => { handleState(e) }}
                                        placeholder="画像のURLを入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
                                <div className="flex-none">
                                    <label className="block text-sm font-medium text-gray-700">
                                        VeryRareの枚数
                                    </label>
                                    <input
                                        type="number"
                                        value={states.veryrare_lots}
                                        name={"veryrare_lots"}
                                        onChange={(e) => { handleState(e) }}
                                        min={0}
                                        max={1000}
                                        placeholder="VeryRareの枚数を入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        VeryRareで表示する画像のURL
                                    </label>
                                    <input
                                        type="text"
                                        value={states.veryrare_image_url}
                                        name={"veryrare_image_url"}
                                        onChange={(e) => { handleState(e) }}
                                        placeholder="画像のURLを入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
                                <div className="flex-none">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Rareの枚数
                                    </label>
                                    <input
                                        type="number"
                                        value={states.rare_lots}
                                        name={"rare_lots"}
                                        onChange={(e) => { handleState(e) }}
                                        min={0}
                                        max={1000}
                                        placeholder="Rareの発行枚数を入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Rareで表示する画像のURL
                                    </label>
                                    <input
                                        type="text"
                                        value={states.rare_image_url}
                                        name={"rare_image_url"}
                                        onChange={(e) => { handleState(e) }}
                                        placeholder="画像のURLを入力"
                                        className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="block text-sm font-medium text-gray-700">
                                    二次流通で取得するロイヤリティの割合（0~3%）
                                </label>
                                <select
                                    value={states.royalty}
                                    placeholder={"選択してください"}
                                    name={"royalty"}
                                    onChange={(e) => { handleState(e) }}
                                    className="select select-bordered"
                                >
                                    <option>0.0</option>
                                    <option>0.5</option>
                                    <option>1.0</option>
                                    <option>1.5</option>
                                    <option>2.0</option>
                                    <option>2.5</option>
                                    <option>3.0</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                作成を予約する
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Create;
