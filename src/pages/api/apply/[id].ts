import { prisma } from '@/core/db';

const handler = async (req: any, res: any) => {
    if (req.method === 'DELETE') {
        const { id, candidateId } = req.query;

        if (!id) return res.status(400).end("Invalid request, please send valid id");

        await prisma.candidateJobPosting.delete({
            where: {
                uniqueJobPostingCandidate: {
                    jobPostingId: parseInt(id),
                    candidateId: parseInt(candidateId)
                }
            }
        });

        return res.status(200).send("Candidate Job Posting borrado");
    }

    return res
        .status(405)
        .json({ error: 'This request only supports GET and DELETE requests' });
};

export default handler;
