// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: String
    price: String
    canbuy: boolean
}

export default function getnft(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
    ids: String,
    prices: String,
) {
    //データの取得方法検討中
    req.method
}