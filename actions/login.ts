"use server";

import * as z from "zod";
import { LoginSchema } from "@/skemas";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { defaultLoginRedirect } from "@/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    // check if the validation is not ok
    if(!validateFields.success){
        return {error: "Invalid Fields!"}
    }

    const { email, password } = validateFields.data;

    try{
        await signIn("credentials", {
            email,
            password,
            redirectTo: defaultLoginRedirect,
        });
        return {success: "Email Sent!"};
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error: "Invalid Email or Password!"}
                default:
                    return {error: "Something went wrong!"}
            }
        }

        throw error;
    }
}