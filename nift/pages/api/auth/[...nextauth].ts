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
        session: async ({ session, token, user }) => {
            session.user = user;
            session.accessToken = token.accessToken;
            console.log(session);
            return session;
        },
        jwt: async ({ token, user, account, profile, isNewUser }) => {
            console.log(`account:${JSON.stringify(account)}`);
            if (account) {
                token.accessToken = account.access_token;
            }
            console.log(token);

            return token;
        },
    },
});
