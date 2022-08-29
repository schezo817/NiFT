// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: String
    price: String
    canbuy: boolean
}

export default function releacenft(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
    ids: String,
    prices: String,
) {
    res.status(200).json({
        id: ids,
        price: prices,
        canbuy: true
    })
}
