"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";

import prisma from "@/lib/db";

import { RegisterSchema } from "@/skemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    // check if the validation is not ok
    if(!validateFields.success){
        return {error: "Invalid Fields!"}
    }

    const { name, email, password} = validateFields.data;
    const hashPassword = await bcrypt.hash(password, 10);

    const isEmailExisted = await getUserByEmail(email);

    // check if the email is already existed
    if(isEmailExisted){
        return {error: "Email already existed!"}
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword
        },
    });

    // TODO: send email to the user

    return {success: "User created!"};
}