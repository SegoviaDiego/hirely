import { prisma } from '@/core/db';

const putMethod = async (req: any, res: any) => {
  const { id } = req.query;

  const { jobPostingId, candidateId } = req.body;

  try {
    const candidateJobPosting = await prisma.candidateJobPosting.update({
      data: {
        jobPostingId,
        candidateId,
      },
      where: {
        id,
      },
    });

    return res.status(200).json(candidateJobPosting);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const deleteMethod = async (req: any, res: any) => {
  const { id } = req.query;

  try {
    await prisma.candidateJobPosting.delete({
      where: {
        id,
      },
    });

    return res.status(200).end();
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'PUT':
      return putMethod(req, res);
    case 'DELETE':
      return deleteMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This request only supports PUT and DELETE requests' });
  }
};

export default handler;
