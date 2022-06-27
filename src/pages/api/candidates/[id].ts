import { prisma } from '@/core/db';

const handler = async (req: any, res: any) => {
    if (req.method === 'GET') {
        const { id } = req.query;

        if (!id) return res.status(400).end("Invalid request, please send valid id");

        const candidate = await prisma.candidate.findFirst({
            where: { id: parseInt(id) },
            include: {
                techs: {
                    include: {
                        tech: true
                    }
                },
                appliedJobPostings: {
                    include: {
                        jobPosting: true,
                        timeline: true
                    }
                }
            }
        });

        return res.status(200).send(candidate);
    }

    return res
        .status(405)
        .json({ error: 'This request only supports GET and DELETE requests' });
};

export default handler;
