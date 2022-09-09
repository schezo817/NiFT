import type { NextApiHandler } from "next";
import prisma from "utils/prisma";

export const handler: NextApiHandler = async (req, res) => {
    
    const { method } = req;

    try {
        const id: string = "";
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        });
        
        console.log(user);
        res.status(200).json({status: "success"});
    } catch (error) {
        res.json({ status: "error"})
    }
}

export default handler;