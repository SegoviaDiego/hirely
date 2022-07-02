import { UserRole } from '@prisma/client';

import { prisma } from '@/core/db';

const bcrypt = require('bcrypt');

const salt = parseInt(process.env.NEXTAUTH_SALT_ROUNDS || '10', 10);

const handler = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { name: fullName, email, password } = req.body;

    try {
      const hash = await bcrypt.hash(password, salt);

      await prisma.user.create({
        data: {
          fullName,
          email,
          password: hash,
          role: UserRole.USER,
        },
      });

      return res.status(200).end();
    } catch (err: any) {
      return res.status(503).json({ err: err.toString() });
    }
  }

  return res
    .status(405)
    .json({ error: 'This request only supports POST requests' });
};

export default handler;
