"use client";

import * as z from "zod";

import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { LoginSchema } from "@/skemas";

import { useState, useTransition } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-succres";
import { login } from "@/actions/login";

// EXPORT DEFAULT ITS FOR A PAGE AND DONT USER EXPORT DEFAULT IF YOU WANT TO USE IT IN A COMPONENT FILE


export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPanding, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
      startTransition(() => {
        login(values)
         .then((data) => {
            setError(data.error);
            setSuccess(data.success);
         })
        
        });
    };

    return (
        <CardWrapper headLabel="Welcome back" backButtonHref="/auth/register" backButtonLabel="Dont have an account?" showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isPanding} {...field} placeholder="john@doe.com" type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField 
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPanding} {...field} placeholder="******" type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button disabled={isPanding} type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}