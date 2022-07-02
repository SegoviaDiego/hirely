import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from '@/core/db';

const bcrypt = require('bcrypt');

const verifyPasswordHash = (plainPassword: string, hashedPassword: string) =>
  new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (_err: any, res: any) =>
      resolve(res)
    );
  });

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  useSecureCookies:
    process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials) return null;

          const { email, password } = credentials;

          if (!email) return null;
          if (!password) return null;

          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user) {
            // Compare the hash
            const isValidPassword = await verifyPasswordHash(
              credentials.password,
              user.password
            );

            if (isValidPassword)
              return {
                userId: user.id,
                name: user.fullName,
                email: user.email,
              };
          }

          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
});
