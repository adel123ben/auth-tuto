import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email!"
    }),
    password: z.string().min(1, {
        message: "Password is to short!"
    })
})


export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is to short!"
    }),
    email: z.string().email({
        message: "Invalid email!"
    }),
    password: z.string().min(6, {
        message: "Min 6 characters required!"
    })
})