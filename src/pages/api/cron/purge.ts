import { NextApiRequest, NextApiResponse } from "next";
import { livepeer, prisma } from "../upload";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prunable = await prisma.video.findMany({
        where: {
            createdAt: {
                lt: new Date(Date.now() - (1000 * 60 * 60 * 24)),
            },
            mintTx: null,
        },
    });

    console.log(prunable);

    for (const video of prunable) {
        const res = await fetch(`https://livepeer.studio/api/asset/${video.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${process.env.LIVEPEER_API_KEY!}`,
            },
        });
        if (!res.ok) {
            console.error(await res.json());
        }
        await prisma.video.delete({
            where: { id: video.id },
        });
    }
};

export default handler;