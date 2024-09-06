import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/db";

// import auth configue to user prisma because prisma d'ont word on the edge
import authConfig from "./auth.config";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  ...authConfig,
});