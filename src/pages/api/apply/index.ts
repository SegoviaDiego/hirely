import { prisma } from '@/core/db';

const handler = async (req: any, res: any) => {
    if (req.method === 'POST') {
        const { id, jobPostingId, candidateId, instance, timelineId } = req.body;

        if (id) {
            const candidateJobPosting = await prisma.candidateJobPosting.update({
                where: { id: id },
                data: {
                    instanceKanban: instance,
                    timelineId: timelineId,
                }
            });

            await prisma.timeline.update({
                where: { id: timelineId },
                data: {
                    endDate: new Date()
                }
            })

            return res.status(200).send(candidateJobPosting);;
        }

        const candidateJobPosting = await prisma.candidateJobPosting.create({
            data: {
                jobPostingId: jobPostingId,
                candidateId: candidateId,
                instanceKanban: instance,
                timelineId: timelineId
            }
        });

        return res.status(200).send(candidateJobPosting);
    }

    return res
        .status(405)
        .json({ error: 'This request only supports GET requests' });
};

export default handler;
