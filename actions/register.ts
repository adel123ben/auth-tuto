"use server";

import * as z from "zod";
import { RegisterSchema } from "@/skemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    // check if the validation is not ok
    if(!validateFields.success){
        return {error: "Invalid Fields!"}
    }

    return {success: "Email Sent!"};
}