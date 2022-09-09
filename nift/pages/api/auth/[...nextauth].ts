import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        jwt: async ({ token, user, account }) => {
            if (user) {
                token.id = user?.id; // get user id from jwt
            }
            if (account) {
                token.accessToken = account?.access_token;
            }
            console.log("token:\n", token);
            return token;
        },
        session: async ({ session, token, user }) => {
            if (user) {
                session.user = user;
            }
            if (token) {
                session.id = token.id as string;
                session.accessToken = token.accessToken as string;
            }
            console.log("session:\n",session);
            return session;
        }
    },
});
