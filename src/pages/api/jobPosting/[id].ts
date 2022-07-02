import { prisma } from '@/core/db';

const getMethod = async (req: any, res: any) => {
  const { id } = req.query;

  try {
    const jobPosting = await prisma.jobPosting.findUnique({
      where: {
        id: Number.parseInt(id, 10),
      },
      include: {
        techs: {
          include: {
            tech: true,
          },
        },
        candidates: {
          include: {
            candidate: {
              include: {
                techs: true,
              },
            },
          },
        },
        timelines: true,
      },
    });

    return res.status(200).json(jobPosting);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const deleteMethod = async (req: any, res: any) => {
  const { id } = req.query;

  try {
    await prisma.jobPosting.delete({
      where: {
        id: Number.parseInt(id, 10),
      },
    });

    return res.status(200).end();
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

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

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      return getMethod(req, res);
    case 'DELETE':
      return deleteMethod(req, res);
    case 'PUT':
      return putMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This request only supports DELETE and GET requests' });
  }
};

export default handler;
