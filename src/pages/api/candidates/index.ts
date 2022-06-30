import { prisma } from '@/core/db';

const getMethod = async (_: any, res: any) => {
  try {
    const candidates = await prisma.candidate.findMany();

    return res.status(200).json(candidates);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      return getMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This endpoint only supports GET requests' });
  }
};

export default handler;
