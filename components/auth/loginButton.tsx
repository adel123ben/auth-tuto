"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild,
}: LoginButtonProps) => {
    const router = useRouter();
    const handelClick = () => {
        router.push('/auth/login');
    }

    if (mode === "modal"){
        return (
            <span>
                TODO: modal span!
            </span>
        )
    }
    return ( 
       <span onClick={handelClick} className="cursor-pointer">
        {children}
       </span>
     );
}
 
export default LoginButton;