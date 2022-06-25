import { prisma } from '@/core/db';
import { matcher } from '@/core/jobCandidateMatcher';

const handler = async (req: any, res: any) => {
    if (req.method === 'GET') {
        var jobPosting = await prisma.jobPosting.findFirst(
            //by id?
        );
        if (!jobPosting) {
            return res.status(404).json({ err: `No existe ninguna búsqueda con id: ${req.body.id}` });
        }
        var candidates = await prisma.candidate.findMany();
        if (!candidates || candidates.length == 0) {
            return res.status(404).json({ err: "No se cargaron candidatos" });
        }

        return res.status(200).end(matcher(jobPosting!, candidates));
    }

    return res
        .status(405)
        .json({ error: 'This request only supports GET requests' });
};

export default handler;
