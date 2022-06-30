import { prisma } from '@/core/db';

const postMethod = async (req: any, res: any) => {
  const {
    jobPostingId,
    candidateId,
    instance,
    timeline,
    organizationMatch,
    candidateMatch,
  } = req.body;

  try {
    const candidateJobPosting = await prisma.candidateJobPosting.create({
      data: {
        candidateId,
        jobPostingId,
        candidateMatch: candidateMatch || 0,
        organizationMatch: organizationMatch || 0,
      },
    });

    return res.status(200).json(candidateJobPosting);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'POST':
      return postMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This request only supports POST requests' });
  }
};

export default handler;
