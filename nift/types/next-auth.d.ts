import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: User | JWT;
        expires: Date;
        id: string;
        accessToken: string;
    }

    interface JWT extends DefaultJWT {
        id: string;
        accessToken: string;
    }
}
