"use server";

import * as z from "zod";
import { LoginSchema } from "@/skemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    // check if the validation is not ok
    if(!validateFields.success){
        return {error: "Invalid Fields!"}
    }

    return {success: "Email Sent!"};
}