import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({}),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
});
