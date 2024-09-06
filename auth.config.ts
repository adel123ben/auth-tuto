import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

// import the login skema
import { LoginSchema } from "@/skemas";
import { getUserByEmail } from "./data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFields = LoginSchema.safeParse(credentials);

                if (validateFields.success) {
                    const { email, password } = validateFields.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const isPasswordMatch = await bcrypt.compare(password, user.password);
                    if (isPasswordMatch) {
                        return user;
                    }
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig