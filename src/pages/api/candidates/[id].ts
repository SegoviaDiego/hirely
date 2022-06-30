import { prisma } from '@/core/db';

const getMethod = async (req: any, res: any) => {
  const { id } = req.query;

  try {
    const candidate = await prisma.candidate.findUnique({
      where: {
        id: Number.parseInt(id, 10),
      },
    });

    return res.status(200).json(candidate);
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
        .json({ error: 'This request only supports GET requests' });
  }
};

export default handler;
